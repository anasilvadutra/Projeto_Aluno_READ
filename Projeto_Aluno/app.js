// PROJETO DO ALUNO - complete as funções abaixo.
// Execute com: npm start
const fs = require('node:fs');
const caminho = require('node:path');
const ARQUIVO = caminho.join(__dirname, 'maquinas.json');


  // TODO 1: ler ARQUIVO com fs.readFileSync(ARQUIVO, 'utf8').
  // TODO 2: converter o texto JSON em array com JSON.parse(...).
  // TODO 3: retornar o array.
  
function carregarMaquinas() {
  const texto = fs.readFileSync(ARQUIVO, 'utf8');
  const maquinas = JSON.parse(texto);
  return maquinas;
}

  // TODO 4: percorrer com forEach e apresentar id, nome e status.
function listarMaquinas(maquinas) {
  maquinas.forEach(maquina => {
    console.log(maquina.id + ' - ' + maquina.nome + ' - ' + maquina.status);
  });
}

function buscarPorId(maquinas, id) {
  // TODO 5: encontrar com find(). O ID recebido deve ser número.
  return maquinas.find(maquina => maquina.id === id);
}

function filtrarPorStatus(maquinas, status) {
  // TODO 6: retornar um novo array com filter().
   return maquinas.filter(maquina => maquina.status === status);
}

function filtrarPorSetor(maquinas, setor) {
  // DESAFIO: retornar máquinas do setor informado.
   return maquinas.filter(maquina => maquina.setor === setor);
}

function executar() {
  // TODO 7: chamar carregarMaquinas, listarMaquinas e fazer consultas.
  // Exemplos a testar: id 3, id 99, status 'manutencao'.
  const maquinas = carregarMaquinas();
   console.log('Sistema de consultas industriais - CRUD READ');
  console.log('\n--- Lista de máquinas ---');
  listarMaquinas(maquinas);

  console.log('\nBusca por ID 3:');
  console.log(buscarPorId(maquinas, 3));

  console.log('Busca por ID 99:');
  console.log(buscarPorId(maquinas, 99));

  console.log('\nFiltro por status "manutencao":');
  console.log(filtrarPorStatus(maquinas, 'manutencao'));
}


if (require.main === module) executar();
module.exports = { carregarMaquinas, listarMaquinas, buscarPorId, filtrarPorStatus, filtrarPorSetor };


