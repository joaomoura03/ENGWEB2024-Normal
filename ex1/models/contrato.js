var mongoose = require('mongoose');

var example = {
    "_id": 10424261,
    "nAnuncio": "",
    "tipoprocedimento": "Consulta Prévia",
    "objectoContrato": "Seguro de Acidentes de Trabalho para os Funcionários/as da Urbe - Consultores Associados, Lda.",
    "dataPublicacao": "01/01/2024",
    "dataCelebracaoContrato": "01/01/2024",
    "precoContratual": "3918,75",
    "prazoExecucao": 366,
    "NIPC_entidade_comunicante": 505111667,
    "entidade_comunicante": "Urbe - Consultores Associados, L.da",
    "fundamentacao": "Artigo 20.º, n.º 1, alínea c) do Código dos Contratos Públicos"
};

var contratoSchema = new mongoose.Schema({
    _id: Number,
    nAnuncio: String,
    tipoprocedimento: String,
    objectoContrato: String,
    dataPublicacao: String,
    dataCelebracaoContrato: String,
    precoContratual: Number,
    prazoExecucao: Number,
    NIPC_entidade_comunicante: Number,
    entidade_comunicante: String,
    fundamentacao: String
}, { versionKey: false });

module.exports = mongoose.model('Contrato', contratoSchema);
