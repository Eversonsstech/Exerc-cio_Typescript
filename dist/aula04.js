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
async function enviarCep() {
    const dados = {
        cep: "01001-000",
        logradouro: "Praça da Sé",
        complemento: "lado ímpar",
        unidade: "",
        bairro: "Sé",
        localidade: "São Paulo",
        uf: "SP",
        estado: "São Paulo",
        regiao: "Sudeste",
        ibge: "3550308",
        gia: "1004",
        ddd: "11",
        siafi: "7107"
    };
    const response = await fetch("https://viacep.com.br/ws/01001000/json/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    });
    const resultado = await response.json();
    console.log(resultado);
}
enviarCep();
//# sourceMappingURL=aula04.js.map