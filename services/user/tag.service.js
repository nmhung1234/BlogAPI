import { db } from "../../repositories/index.js";
import { responseSuccess, responseError } from "../../Utils/index.js";

export default class TagService {
    async getAllTag() {
        try {
            const resp = await db.tag.find({});
            console.log(resp);
            const result = await resp.toArray();
            console.log(result)
            return (responseSuccess(result));
        } catch (error) {
            return (responseError(error));
        }
    }
}