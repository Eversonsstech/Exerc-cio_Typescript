// 1º Exercício. Uso de arrays e objetos.
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
// 2º Exercício. Uma função assíncrona com async/await.
async function executar() {
    const resultado = await tarefa();
    console.log(resultado);
}
async function tarefa() {
    return "Operação concluída!";
}
executar();
// 3º Exercício. Simulação de uma Promise.
async function exemplo() {
    const resultado = await Promise.resolve("Operação concluída!");
    console.log(resultado);
}
exemplo();
// 4º Exercício. Explicar, em comentários, o fluxo assíncrono.
//O fluxo assíncrono: é a execução de tarefas que podem ocorrer sem bloquear o restante do programa,
//permitindo que ele permança executando outras operações, enquanto aguarda o resultado de uma tarefa.
// 5º Exercício. Criação de Testes Unitários.
function somar(a, b) {
    return a + b;
}
function testarSoma() {
    const resultado1 = somar(2, 3);
    if (resultado1 === 5) {
        console.log("Teste 1 passou!");
    }
    else {
        console.log("Teste 1 falhou!");
    }
    const resultado2 = somar(10, 5);
    if (resultado2 === 15) {
        console.log("Teste 2 passou!");
    }
    else {
        console.log("Teste 2 falhou!");
    }
}
testarSoma();
export {};
//# sourceMappingURL=aula02.js.map