import mongoose from "mongoose";

const filmeSchema = new mongoose.Schema(
    {
        id: { type: mongoose.Schema.Types.ObjectId },
        nome: { type: String, required: true },
        anoLancamento: { type: String, required: true },
        diretor: { type: String, required: true },
    },
    { versionKey: false },
);

const filme = mongoose.model("filmes", filmeSchema);

export { filme, filmeSchema };
