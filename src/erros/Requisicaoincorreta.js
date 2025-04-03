import Errobase from "./Errobase";

class Requisicaoincorreta extends Errobase {
    constructor(mensagem = "Um ou mais dados são invalidos") {
        super(mensagem, 400);
    }
}
export default Requisicaoincorreta;
