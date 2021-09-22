import commonRoutes from "./common.routes.js";
import postRoutes from "./post.routes.js";
import tagRoutes from "./tag.routes.js";
import userRoutes from "./user.routes.js";

const mergeRoute =  [...userRoutes, ...tagRoutes, ...postRoutes, ...commonRoutes];
export default mergeRoute