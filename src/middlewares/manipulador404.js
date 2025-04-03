import NaoeEncontrado from "../erros/Naoencontrado.js";

function manipulador404(req, res, next) {
    const erro404 = new NaoeEncontrado();

    next(erro404);
}
export default manipulador404;
