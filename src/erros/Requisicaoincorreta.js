import Errobase from "./Errobase.js";

class Requisicaoincorreta extends Errobase {
    constructor(mensagem = "Um ou mais dados são invalidos") {
        super(mensagem, 400);
    }
}
export default Requisicaoincorreta;
