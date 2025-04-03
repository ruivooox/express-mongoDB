import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {
        id: { type: mongoose.Schema.Types.ObjectId },
        titulo: {
            type: String,
            required: [true, "O título é obrigatório"],
        },
        editora: {
            type: String,
            required: [true, "a editora é obrigatória"],
        },
        preco: {
            type: Number,
        },
        paginas: {
            type: Number,
        },
    },
    { versionKey: false },
);
const livro = mongoose.model("livros", livroSchema);
export default livro;
