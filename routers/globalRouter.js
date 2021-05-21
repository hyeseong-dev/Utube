import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import { join, login, logout } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);     //     "/" 단 서버에서는 //시가 여러개 오더라도 1개로 인식함.
globalRouter.get(routes.search, search); //     "/search"
globalRouter.get(routes.join, join);     //     "join"
globalRouter.get(routes.login, login);   //     "login"
globalRouter.get(routes.logout, logout); //     "logout"

export default globalRouter;