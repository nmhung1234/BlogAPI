import chalk from 'chalk';
import crypto from 'crypto';
import nodeMailer from 'nodemailer';

export const generateTime = () => new Date().toISOString();

export const generatePassword = (password) => {
    const salt = crypto.randomBytes(128).toString("base64");
    const hassedPassword = crypto.pbkdf2Sync(password, salt, 10000, 256, "sha512").toString("base64");
    return { salt, hassedPassword }
};

export const checkPassword = (password, salt, passwordInDb) => {
    const hassedPassword = crypto.pbkdf2Sync(password, salt, 10000, 256, "sha512").toString("base64");
    if (hassedPassword == passwordInDb) {
        return true;
    } else {
        return false;
    }
}

export const generateKeyString = () => {
    return Math.random().toString(36).substring(2, 7);
}

export const slug = (str) => {
    //Đổi chữ hoa thành chữ thường
    str = str.toLowerCase();

    //Đổi ký tự có dấu thành không dấu
    str = str.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
    str = str.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
    str = str.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
    str = str.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
    str = str.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
    str = str.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
    str = str.replace(/đ/gi, 'd');
    str = str.replace(/[^a-zA-Z ]/g, "")
    //Xóa các ký tự đặt biệt
    str = str.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
    //Đổi khoảng trắng thành ký tự gạch ngang
    str = str.replace(/ /gi, "-");
    //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
    //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
    str = str.replace(/\-\-\-\-\-/gi, '-');
    str = str.replace(/\-\-\-\-/gi, '-');
    str = str.replace(/\-\-\-/gi, '-');
    str = str.replace(/\-\-/gi, '-');
    //Xóa các ký tự gạch ngang ở đầu và cuối
    str = '@' + str + '@';
    str = str.replace(/\@\-|\-\@|\@/gi, '');

    return str;
}

export const sendMail = (mailOptions) => {
    let transporter = nodeMailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_SERVER,
            pass: process.env.EMAIL_PASS
        }
    });

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
}

export const logRequest = (req, res, next) => {
    const { method, originalUrl, params, query, body } = req;
    const timeRequest = new Date().toISOString();
    switch (method) {
        case 'GET': {
            console.log(`[${timeRequest}]`,chalk.black.bgWhite("Method:"), chalk.black.bgGreen(method), "|", "url:", chalk.cyan(originalUrl), "|", "query:", query);
            break;
        }
        case 'POST': {
            console.log(`[${timeRequest}]`,chalk.black.bgWhite("Method:"), chalk.black.bgCyan(method), "|", "url:", chalk.cyan(originalUrl), "|", "Body:", body);
            break;
        }
        case 'PUT': {
            console.log(`[${timeRequest}]`,chalk.black.bgWhite("Method:"), chalk.black.bgYellow(method), "|", "url:", chalk.cyan(originalUrl), "|", "params:", params, "Body:", body);
            break;
        }
        case 'DELETE': {
            console.log(`[${timeRequest}]`,chalk.black.bgWhite("Method:"), chalk.black.bgRed(method), "|", "url:", chalk.cyan(originalUrl), "|", "params:", params);
            break;
        }
        default: break;
    }
    next();
}
export const responseSuccess = (data, message = "") => {
    return { success: true, errorCode: 0, message: message, data }
}
export const responseError = (err) => {
    return {
        success: false,
        errorCode: err.errorCode || 500,
        message: err.message,
        data: null
    }
}