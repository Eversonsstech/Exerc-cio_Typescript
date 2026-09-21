"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function cafe() {
    return "café pronto!";
}
async function cafeexemplo() {
    const resultado = cafe();
    console.log(resultado);
    const resultadoAguardado = await cafe();
    console.log(resultadoAguardado);
}
cafeexemplo();
//setTimeout
async function cafee() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("café pronto!");
        }, 2000);
    });
}
async function cafeexemploo() {
    const resultado = cafee();
    console.log(resultado);
    const resultadoAguardado = await cafee();
    console.log(resultadoAguardado);
}
cafeexemploo();
async function buscarCep() {
    const response = await fetch("https://viacep.com.br/ws/01001000/json/");
    const dados = await response.json();
    return dados;
}
async function buscarCepExemplo() {
    const resultadoAguardado = await buscarCep();
    console.log(resultadoAguardado);
}
buscarCepExemplo();
//# sourceMappingURL=aula04.js.map