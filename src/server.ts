//Tudo vai partir desse arquivo
import express from 'express';
import cors from 'cors';
import routes from './routes';


//tudo parte desse app
const app = express();

app.use(cors());
//faz a conversao do request.body para um objeto do JS
app.use(express.json());

app.use(routes);



// //definir primeira rota
// app.get('/', (request, response) => {

//     return response.json({message: "Hello World"});
// })
//metodo que faz a app ouvir um endereco http
app.listen(3333);