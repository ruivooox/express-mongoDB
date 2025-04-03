import Errobase from "./Errobase.js";

class Requisicaoincorreta extends Errobase {
    constructor(mensagem = "Um ou mais dados fornecidos estão incorretos") {
        super(mensagem, 400);
    }
}
export default Requisicaoincorreta;
