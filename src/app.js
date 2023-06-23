import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
const Port = 5000;
let users = [
    {
        username: 'bobesponja', 
        avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png" 
    }
];
let tweets = [
    {
        username: "bobesponja",
      tweet: "Eu amo hambúrguer de siri!"
    }
];



app.get('/tweets', (req,res) => {
    //res.send(tweets)
    if(tweets.length === 0){
        res.send([]);
    }else{
        let lst = [];
        let resp = [];
        for(let i = tweets.length -1 ; (i>-1)&& (i>tweets.length-11);i--){
            lst.push(tweets[i]);
        }
        lst.forEach(el => {
            let { username, tweet } = el;
            let { avatar } = users.find(el => el.username === username);
            //console.log(`O jogador ${usuario} jogará na posição ${posicao}`);
            resp.push({username, avatar, tweet});
          });




        res.send(resp);
        //console.log("entrou na 2");
    }
});

app.post(
    '/sign-up',
    (req,res)=>{
        const {username, avatar} = req.body;
        if(username && avatar){
            users.push({username, avatar});
            res.send("OK");
        }
    }
)

app.listen(Port, ()=> console.log(`Servidor funcionando na porta ${Port}`));