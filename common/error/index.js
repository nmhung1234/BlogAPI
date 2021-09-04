export const UserError = {
    NEW_PASSWORD_SAME: {
        message: 'Mật khẩu trùng với mật khẩu cũ, vui lòng chọn một mật khẩu khác.',
        errorCode: 400,
    },
    INVALID_INPUT_PARAMS: {
        message: 'Dữ liệu nhập không hợp lệ.',
        errorCode: 400,
    },
    UNKNOWN_ERROR: {
        message: 'Đã có lỗi xảy ra, vui lòng thử lại sau.',
        errorCode: 500,
    },
    USER_NOT_FOUND: {
        message: 'Không tìm thấy người dùng này.',
        errorCode: 400,
    },
    LOGIN_WRONG_USERNAME: {
        message: 'Username đăng nhập không chính xác, vui lòng kiểm tra lại.',
        code: 400,
    },
    LOGIN_WRONG_PASSWORD: {
        message: 'Mật khẩu đăng nhập không chính xác, vui lòng kiểm tra lại.',
        code: 400,
    },
    USER_EXISTING: {
        message: 'Người dùng đã tồn tại.',
        code: 400,
    },
    EMAIL_EXISTING: {
        message: 'Email đã tồn tại.',
        code: 400,
    },
    EMAIL_FORMAT: {
        message: 'Email không đúng định dạng, vui lòng kiểm tra lại.',
        errorCode: 400,
    },
    LOGIN_SNS_VERIFY_EMAIL: {
        message: 'Email chưa được xác minh.',
        errorCode: 405,
    },
    TOKEN_EXPIRED: {
        message: 'Mã xác nhận đã hết hạn, vui lòng đăng nhập lại.',
        errorCode: 400,
    },
    TOKEN_NOT_FOUND: {
        message: 'Không tìm thấy mã xác nhận.',
        errorCode: 400,
    },
    ACCOUNT_LOCKED: {
        message: 'Tài khoản đã bị khóa, vui lòng liên hệ với admin để nhận được hỗ trợ.',
        errorCode: 400,
    },
};

export const AuthError = {
    TOKEN_NOT_FOUND: {
        message: 'Không tìm thấy token.',
        errorCode: 400,
    },
    TOKEN_INVALID: {
        message: 'Token không hợp lệ.',
        errorCode: 400,
    },
    TOKEN_EXPIRED: {
        message: 'Token đã hết hạn.',
        errorCode: 401,
    },
    MEMBER_TYPE_INVALID: {
        message: 'Loại thành viên không hợp lệ.',
        errorCode: 400,
    },
    REFRESH_TOKEN_NOT_FOUND: {
        message: 'Tôi không thể tìm thấy token thông báo mới.',
        errorCode: 403,
    },
    REFRESH_TOKEN_INVALID: {
        message: 'Làm mới token thông báo không hợp lệ.',
        errorCode: 403,
    },
};

export const CommonError = {
    INVALID_INPUT_PARAMS: {
        message: 'Dữ liệu đầu vào không hợp lệ! Vui lòng kiểm tra lại.',
        errorCode: 400,
    },
    GET_ERROR: {
        message: 'Tải dữ liệu gặp sự cố, vui lòng kiểm tra lại.',
        errorCode: 400,
    },
    NOT_FOUND_ERROR: {
        message: 'Không tìm thấy thông tin.',
        errorCode: 400,
    },
    UNKNOWN_ERROR: {
        message: 'Lỗi không xác định. Vui lòng liên hệ với đội ngũ admin hoặc kỹ thuật viên.',
        errorCode: 500,
    },
};

export const AdminError = {
    NEW_PASSWORD_SAME: {
        message: 'Mật khẩu trùng với mật khẩu cũ, vui lòng chọn một mật khẩu khác.',
        errorCode: 400,
    },
    INVALID_INPUT_PARAMS: {
        message: 'Dữ liệu nhập không hợp lệ.',
        errorCode: 400,
    },
    UNKNOWN_ERROR: {
        message: 'Đã có lỗi xảy ra, vui lòng thử lại sau.',
        errorCode: 500,
    },
    ADMIN_NOT_FOUND: {
        message: 'Không tìm thấy người dùng này.',
        errorCode: 400,
    },
    LOGIN_WRONG_PASSWORD: {
        message: 'Email hoặc mật khẩu đăng nhập không chính xác, vui lòng kiểm tra lại.',
        code: 400,
    },
    ADMIN_EXISTING: {
        message: 'Người dùng đã tồn tại.',
        code: 400,
    },
    EMAIL_FORMAT: {
        message: 'Email không đúng định dạng, vui lòng kiểm tra lại.',
        errorCode: 400,
    },
    LOGIN_SNS_VERIFY_EMAIL: {
        message: 'Email chưa được xác minh.',
        errorCode: 405,
    },
    TOKEN_EXPIRED: {
        message: 'Mã xác nhận đã hết hạn, vui lòng đăng nhập lại.',
        errorCode: 400,
    },
    TOKEN_NOT_FOUND: {
        message: 'Không tìm thấy mã xác nhận.',
        errorCode: 400,
    },
    ACCOUNT_DELETE: {
        message: 'Tài khoản đã bị khóa, vui lòng liên hệ với admin để nhận được hỗ trợ.',
        errorCode: 400,
    },
};

export const DoctorError = {
    NEW_PASSWORD_SAME: {
        message: 'Mật khẩu trùng với mật khẩu cũ, vui lòng chọn một mật khẩu khác.',
        errorCode: 400,
    },
    INVALID_INPUT_PARAMS: {
        message: 'Dữ liệu nhập không hợp lệ.',
        errorCode: 400,
    },
    UNKNOWN_ERROR: {
        message: 'Đã có lỗi xảy ra, vui lòng thử lại sau.',
        errorCode: 500,
    },
    DOCTOR_NOT_FOUND: {
        message: 'Không tìm thấy người dùng này.',
        errorCode: 400,
    },
    LOGIN_WRONG_PASSWORD: {
        message: 'Email hoặc mật khẩu đăng nhập không chính xác, vui lòng kiểm tra lại.',
        code: 400,
    },
    DOCTOR_EXISTING: {
        message: 'Người dùng đã tồn tại.',
        code: 400,
    },
    EMAIL_FORMAT: {
        message: 'Email không đúng định dạng, vui lòng kiểm tra lại.',
        errorCode: 400,
    },
    LOGIN_SNS_VERIFY_EMAIL: {
        message: 'Email chưa được xác minh.',
        errorCode: 405,
    },
    TOKEN_EXPIRED: {
        message: 'Mã xác nhận đã hết hạn, vui lòng đăng nhập lại.',
        errorCode: 400,
    },
    TOKEN_NOT_FOUND: {
        message: 'Không tìm thấy mã xác nhận.',
        errorCode: 400,
    },
    ACCOUNT_DELETE: {
        message: 'Tài khoản đã bị khóa, vui lòng liên hệ với admin để nhận được hỗ trợ.',
        errorCode: 400,
    },
};

export const PostError = {
    POST_NOT_FOUND: {
        message: 'Bài viết không tồn tại.',
        errorCode: 400,
    },
    ACCESS_NOT_FOUND: {
        message: 'Bạn không có quyền chỉnh sửa bài viết.',
        errorCode: 400,
    },
    UNKNOWN_ERROR: {
        message: 'Đã có lỗi xảy ra, vui lòng thử lại sau.',
        errorCode: 500,
    },
};

export const CommentError = {
    COMMENT_NOT_FOUND: {
        message: 'Bình luận không tồn tại.',
        errorCode: 400,
    },
    ACCESS_NOT_FOUND: {
        message: 'Bạn không có quyền chỉnh sửa bình luận.',
        errorCode: 400,
    },
    TOPIC_NOT_FOUND: {
        message: 'Mục không tồn tại.',
        errorCode: 400,
    },
};

export const DocumentError = {
    DOCUMENT_NOT_FOUND: {
        message: 'Tài liệu không tồn tại.',
        errorCode: 400,
    },
};
