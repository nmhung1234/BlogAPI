import TagService from "../../services/user/tag.service.js";
const TagSv = new TagService();

export default class UserTagController {
    async getAllTag(req, res) {
        const result = await TagSv.getAllTag();
        res.send(result);
    }
}
