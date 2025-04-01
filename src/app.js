import express from "express";
import conectaDb from "./config/dbConnect.js";
import routes from "./routes/index.js";
const conexao = await conectaDb();

conexao.on("error", (erro) => {
    console.error("Erro conexão", erro);
});
conexao.once("open", () => {
    console.log("conexão feita com sucesso");
});
const app = express();
routes(app);

app.use((error, req, res, next) => {
    if (error instanceof mongoose.Error.CastError) {
        res.status(400).send({
            message: "Dados fornecidos estão incorretos!",
        });
    }

    res.status(500).json({ message: $`falha na exclusão` });
});
export default app;
