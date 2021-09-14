import UserPostController from "../../Controller/user/post.controller.js"
import { Authorization } from "../../middleware/authorization.js";

const userPostController = new UserPostController();
export default [
    {
        method: 'post',
        route: '/api/user/post',
        controller: userPostController,
        middleware: [Authorization],
        action: userPostController.upPost
    },
    {
        method: 'get',
        route: '/api/user/post',
        controller: userPostController,
        middleware: [],
        action: userPostController.getListPreviewPost
    },
    {
        method: 'get',
        route: '/api/user/post/detail',
        controller: userPostController,
        middleware: [],
        action: userPostController.getDetailPost
    },
]