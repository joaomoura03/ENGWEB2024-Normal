var express = require('express');
var router = express.Router();
var axios = require('axios');

const api_dados = 'http://localhost:16000';

router.get('/', async (req, res) => {
  let contratosReq = await axios.get(`${api_dados}/contratos`);
  let contratos = contratosReq.data;
  res.render('index', { contratos: contratos });
});

router.get('/entidades/:nipc', async (req, res) => {
  let contratosReq = await axios.get(`${api_dados}/contratos?entidade=${req.params.nipc}`);
  let contratos = contratosReq.data;
  if (!contratos || contratos.length === 0) {
    res.status(404).send('Entidade não encontrada');
    return;
  }

  let entidade = contratos[0];
  let entidade_nipc = entidade.NIPC_entidade_comunicante;
  let entidade_nome = entidade.entidade_comunicante;

  let preco = contratos.reduce((acc, contrato) => acc + contrato.precoContratual, 0);

  res.render('entidade', { contratos: contratos, entidade_nipc: entidade_nipc, entidade_nome: entidade_nome, preco: preco });
});

router.get('/:id', async (req, res) => {
  let contratoReq = await axios.get(`${api_dados}/contratos/${req.params.id}`);
  let contrato = contratoReq.data;
  res.render('contrato', { contrato: contrato });
});

module.exports = router;
