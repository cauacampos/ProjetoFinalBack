const mongoose = require("mongoose");

const tarefaModel = new mongoose.Schema({
    titulo: { type:String, required: true },
    descricao: { type: String, required: true },
    prioridade: { type: String, required: true },
    status: { type: String, required: true },
    prazo: { type: Date, required: true },
    dataCriacao: { type: Date, default: Date.now }
})

const Tarefa = mongoose.model("tarefa", tarefaModel);

module.exports = Tarefa;