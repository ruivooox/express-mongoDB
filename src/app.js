import express from "express";
import conectaDb from "./config/dbConnect.js";
import routes from "./routes/index.js";

import manipuladorDeErros from "./middlewares/minipuladorDeErros.js";
const conexao = await conectaDb();

conexao.on("error", (erro) => {
    console.error("Erro conexão", erro);
});
conexao.once("open", () => {
    console.log("conexão feita com sucesso");
});
const app = express();
routes(app);

app.use(manipuladorDeErros);
export default app;
