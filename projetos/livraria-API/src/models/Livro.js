import mongoose from "mongoose";

const LivroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: String, required: true },
    preco: { type: Number, required: true },
    paginas: { type: Number, required: true },
}, { versionKey: false });

const livro = mongoose.model("livros", LivroSchema);

export default livro;