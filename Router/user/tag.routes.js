import UserTagController from "../../Controller/user/tag.controller.js";
import { Authorization } from "../../middleware/authorization.js";
const userTagController = new UserTagController();
export default [
    {
        method: 'get',
        route: '/api/user/tag',
        controller: userTagController, 
        middleware: [Authorization],
        action: userTagController.getAllTag
    }
]