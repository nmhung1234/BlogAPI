import UserController from "../../Controller/user/user.controller.js";
import { Authorization } from "../../middleware/authorization.js";
const userController = new UserController()
export default [

    {
        method: 'post',
        route: '/api/user/login',
        controller: userController,
        middleware: [],
        action: userController.login,
    },
    {
        method: 'post',
        route: '/api/user/register',
        controller: userController,
        middleware: [],
        action: userController.register,
    },
    {
        method: 'get',
        route: '/api/user/verify-account',
        controller: userController,
        middleware: [],
        action: userController.verify,
    },
    {
        method: 'post',
        route: '/api/user/refreshToken',
        controller: userController,
        middleware: [],
        action: userController.refreshToken,
    },
    {
        method: 'get',
        route: '/api/user/user',
        controller: userController,
        middleware: [Authorization],
        action: userController.getUserData,
    },
    {
        method: 'get',
        route: '/api/user/activities',
        controller: userController,
        middleware: [Authorization],
        action: userController.getActivities,
    },

]
