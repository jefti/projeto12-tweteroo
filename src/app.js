import { express } from "express";
const app = express();
const Port = 5000;
const users = [
    {
        username: "BobESponja", 
        Avatar: "https://akamai.sscdn.co/letras/215x215/fotos/f/b/e/7/fbe7f6e0f613d2121a31a68fdd7963cf.jpg"}
];

const tweets = [
    {
        username:"BobEsponja",
        tweet: "Estou pronto !!!"
    }
];



app.Listen(Port);