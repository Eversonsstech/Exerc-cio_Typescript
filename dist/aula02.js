"use strict";
// 1º Exercício
Object.defineProperty(exports, "__esModule", { value: true });
// a. ARRAY
let nomes = ["João", "Maria", "Carlos", "Ana"];
console.log("Lista de nomes:");
for (const nome of nomes) {
    console.log(nome);
}
// b. OBJETO
let pessoa = {
    nome: "João",
    idade: 24,
    ativo: true
};
console.log("Dados da pessoa:");
console.log("Nome:", pessoa.nome);
console.log("Idade:", pessoa.idade);
console.log("Ativo:", pessoa.ativo);
// 2º Exercício
async function executar() {
    const resultado = await tarefa();
    console.log(resultado);
}
async function tarefa() {
    return "Operação concluída!";
}
executar();
// 3º Exercício
async function exemplo() {
    const resultado = await Promise.resolve("Operação concluída!");
    console.log(resultado);
}
exemplo();
// 4º Exercício é uma execução
//O fluxo assíncrono: é a execução de tarefas que podem ocorrer sem bloquear o restante do programa,
//permitindo que ele permança executando outras operações, enquanto aguarda o resultado de uma tarefa.
function somar(a, b) { return a + b; }
console.log(somar(2, 3));
const resultado = somar(2, 3);
if (resultado === 5) {
    console.log("Teste passou!");
}
else {
    console.log("Teste falhou!");
}
//# sourceMappingURL=aula02.js.map