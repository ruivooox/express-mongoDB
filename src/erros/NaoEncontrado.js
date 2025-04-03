import Errobase from "./Errobase.js";

class NaoeEncontrado extends Errobase {
    constructor(mensagem = "Página não encontrada") {
        super(mensagem, 404);
    }
}
export default NaoeEncontrado;
