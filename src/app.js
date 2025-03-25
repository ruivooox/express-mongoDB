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

// app.get("/livros", async (req, res) => {
//   const listaLivros = await livro.find({});
//   res.status(200).json(listaLivros);
// });
app.delete("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros.splice(index, 1);
  res.status(200).send("livro removido com sucesso");
});

export default app;
