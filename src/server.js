import express from "express";
import morgan from "morgan";
import { json, urlencoded } from "body-parser";

const app = express();

app.use(morgan('dev'));
app.use(json());
app.use(urlencoded({extended:true}));      // 


const customLogger = (req, res, next) => {
    console.log("Logger incoming");
    console.log(req.body);
    next();
}

app.get('/', customLogger, (req, res) => {
    console.log(req.body);
    res.send({message: "OK"});
});

app.post('/', customLogger, (req, res) => {
    console.log(req.body);
    res.send({message: "OK POST"});
});

export const start = () => {
    app.listen(3000, () => {
        console.log("Server started at 3000");
    });
}


// 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