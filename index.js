import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const PORT = 4000;

const handleListening = () => 
    console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send('미들웨어 후에 잘 나오네요.')
const handleProfile = (req, res) => res.send('프로파일입니다.')
const betweenHome = (req, res, next) => {
    console.log("나는 중간에 있어요.")
    next();
}
const afterHome = (req, res, next) => {
    console.log("나는 두번째 미들웨어");
    next();
}

// const middleware = (req, res, next) => {
//     res.send("not happening");
//     next();

app.use([
    cookieParser(),
    bodyParser.json(),                        // json데이터 처리
    bodyParser.urlencoded({extended: true}), // http form 데이터 처리
    morgan("dev"),
    helmet(),
    betweenHome, 
    afterHome
]); 

app.get("/", handleHome );
app.get("/profile",handleProfile);

app.listen(PORT, handleListening);

