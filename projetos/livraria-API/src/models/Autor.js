import mongoose from "mongoose";

const AutorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    nick: { type: String, required: true }
}, { versionKey: false });

const autor = mongoose.model("autores", AutorSchema);

export { autor, AutorSchema};