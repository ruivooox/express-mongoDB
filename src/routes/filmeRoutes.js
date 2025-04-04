import express from "express";
import FilmesController from "../controllers/filmesController.js";

const rotas = express.Router();

rotas.get("/filmes", FilmesController.buscarFIlme);
rotas.get("/filmes/:id", FilmesController.buscarFIlmeId);
rotas.post("/filmes", FilmesController.cadastrarFilme);
rotas.put("/filmes/:id", FilmesController.atualizarFilme);
rotas.delete("/filmes/:id", FilmesController.deletarFilme);
export default rotas;
