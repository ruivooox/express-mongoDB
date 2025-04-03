import Requisicaoincorreta from "./Requisicaoincorreta.js";

class Errovalidacao extends Requisicaoincorreta {
    constructor(error) {
        const mensagensErro = Object.values(error.errors)
            .map((error) => error.message)
            .join(";");
        super(`Os seguintes erros foram encontrados:  ${mensagensErro}`);
    }
}
export default Errovalidacao;
