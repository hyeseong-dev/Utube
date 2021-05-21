import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "NuTube";
    res.locals.routes = routes;
    next();
};