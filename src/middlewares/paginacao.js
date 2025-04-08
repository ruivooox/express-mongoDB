import Requisicaoincorreta from "../erros/Requisicaoincorreta.js";

async function paginacao(req, res, next) {
    try {
        const { limite = 5, pagina = 1 } = req.query;
        const resultadoPaginado = req.resultado;
        if (limite > 0 && pagina > 0) {
            const listaLivros = await resultadoPaginado
                .find({})
                .sort({ _id: -1 })
                .skip((pagina - 1) * limite)
                .limit(limite);
            res.status(200).json(listaLivros);
        } else {
            next(new Requisicaoincorreta());
        }
    } catch (error) {
        next(error);
    }
}
export default paginacao;
