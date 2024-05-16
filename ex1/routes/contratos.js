var express = require('express');
var router = express.Router();
var Contrato = require('../models/contrato');

router.get('/', function (req, res) {
    var selectors = {};

    if (req.query.entidade)
        selectors.NIPC_entidade_comunicante = req.query.entidade;

    if (req.query.tipo)
        selectors.tipoprocedimento = req.query.tipo;

    Contrato.find(selectors).then(function (contratos) {
        res.send(contratos);
    }).catch(err => { res.status(500).send(err) });
});

//GET /contratos/entidades: devolve a lista de entidades comunicantes ordenada alfabeticamente e sem repetições;
router.get('/entidades', function (req, res) {
    Contrato.find().distinct('entidade_comunicante').then(function (entidades) {
        res.send(entidades.sort());
    }).catch(err => { res.status(500).send(err) });
});

// GET /contratos/tipos: devolve a lista dos tipos de procedimento ordenada alfabeticamente e sem repetições;
router.get('/tipos', function (req, res) {
    Contrato.find().distinct('tipoprocedimento').then(function (tipos) {
        res.send(tipos.sort());
    }).catch(err => { res.status(500).send(err) });
});

router.get('/:id', function (req, res) {
    Contrato.findById(req.params.id).then(function (contrato) {
        if (contrato)
            res.send(contrato);
        else
            res.status(404).send();
    }).catch(err => { res.status(500).send(err) });
});

router.post('/', function (req, res) {
    Contrato.create(req.body).then(function (contrato) {
        res.send(contrato);
    }).catch(err => { res.status(500).send(err) });
});

router.delete('/:id', function (req, res) {
    Contrato.findByIdAndDelete(req.params.id).then(function (contrato) {
        if (contrato)
            res.send(contrato);
        else
            res.status(404).send();
    }).catch(err => { res.status(500).send(err) });
});

router.put('/:id', function (req, res) {
    Contrato.findByIdAndUpdate(req.params.id, req.body).then(function (contrato) {
        if (contrato)
            res.send(contrato);
        else
            res.status(404).send();
    }).catch(err => { res.status(500).send(err) });
});

module.exports = router
