import UserServices from "../../services/user/user.service.js";
const UserSv = new UserServices();

export default class UserController {
    async login(req, res) {
        const { username, password } = req.body;
        const result = await UserSv.login(username, password);
        res.send(result);
    }
    async register(req, res) {
        const { username, password, email } = req.body;
        const result = await UserSv.register(email, username, password);
        res.send(result);
    }
    async verify(req, res) {
        const { token } = req.query;
        const result = await UserSv.verify(token);
        res.send(result);
    }
    async refreshToken(req, res){
        const { refreshToken } = req.body;
        const result = await UserSv.refreshToken(refreshToken);
        res.send(result);
    }
    async getUserData(req, res){
        const { username } = req.query;
        const result = await UserSv.getUserData(username);
        res.send(result)
    }
}