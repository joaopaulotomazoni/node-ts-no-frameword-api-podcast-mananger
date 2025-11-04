import * as http from "http";
import { app } from "./app";

const server = http.createServer(app);//cria servidor

const port = process.env.PORT

server.listen(port, () => {//inicia servidor  
  console.log(`Iniciado na porta ${port}`)
})