import UserCommonController from "../../Controller/user/common.controller.js";
const userCommonController = new UserCommonController();
export default [
    {
        method: 'post',
        route: '/api/user/upload',
        controller: userCommonController,
        middleware: [],
        action: userCommonController.uploadFile
    }
]