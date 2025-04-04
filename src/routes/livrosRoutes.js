import express from "express";
import LivroController from "../controllers/livroController.js";

const rotas = express.Router();

rotas.get("/livros", LivroController.listarLivros);
rotas.get("livros/busca", LivroController.listarLivrosEditora);
rotas.get("/livros/:id", LivroController.listarLivroPorID);
rotas.post("/livros", LivroController.cadastrarLivro);
rotas.put("/livros/:id", LivroController.atualizarLivro);
rotas.delete("/livros/:id", LivroController.deletarLivro);

export default rotas;
