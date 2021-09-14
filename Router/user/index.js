import commonRoutes from "./common.routes.js";
import postRoutes from "./post.routes.js";
import tagRoutes from "./tag.routes.js";
import userRoutes from "./user.routes.js";

export default [...userRoutes, ...tagRoutes, ...postRoutes, ...commonRoutes]