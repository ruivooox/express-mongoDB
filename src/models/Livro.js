import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {
        id: { type: mongoose.Schema.Types.ObjectId },
        titulo: {
            type: String,
            required: [true, "O título é obrigatório"],
        },
        autor: { type: mongoose.Schema.Types.ObjectId },
        ref: "autor",
        required: [true, "Autor é obrigatório"],
        editora: {
            type: String,
            required: [true, "a editora é obrigatória"],
            enum: {
                values: ["Casa do Estagiário", "Software House"],
                message: "A editora {VALUE} não é permitida. ",
            },
        },
        preco: {
            type: Number,
        },
        paginas: {
            type: Number,
            min: [
                10,
                "O valor deve estar entre 10 e 5000. Valor Fornecido: {VALUE}",
            ],
            max: [
                5000,
                "O valor deve estar entre 5000 e 10. Valor Fornecido: {VALUE}",
            ],
        },
    },
    { versionKey: false },
);
const livro = mongoose.model("livros", livroSchema);
export default livro;
