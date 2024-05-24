import mongoose, { mongo } from 'mongoose';
async function conectarNaDB(){
    mongoose.connect("mongodb+srv://teczaiper700:bwyd4PxuRHuAjmaG@cluster0.4n1xuyx.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0");
    return mongoose.connection;
};

export default conectarNaDB;
