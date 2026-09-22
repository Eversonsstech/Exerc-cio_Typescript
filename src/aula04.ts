async function cafe(): Promise<string>{
    return "café pronto!"
}
async function cafeexemplo() {
    const resultado = cafe();
    console.log(resultado);    
    const resultadoAguardado = await cafe();
    console.log(resultadoAguardado);
}
cafeexemplo();

//setTimeout

async function cafee(): Promise<string>{
        return new Promise((resolve) => {
            setTimeout(() =>{
                resolve("café pronto!");
            }, 2000)    
    });
}
async function cafeexemploo() {
    const resultado = cafee();
    console.log(resultado);    
    const resultadoAguardado = await cafee();
    console.log(resultadoAguardado);
}
cafeexemploo();


// ........


type CEP = {
    cep: string;
    logradouro: string;
    complemento: string;
    unidade: string;
    bairro: string;
    localidade: string;
    uf: string;
    estado: string;
    regiao: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
};


async function buscarCep(): Promise<CEP>{ // Get da API , a busca dos dados
    const response = await fetch ("https://viacep.com.br/ws/01001000/json/");
    const dados = await response.json() as CEP;
    return dados;

}
async function buscarCepExemplo() {
    const resultadoAguardado =await buscarCep();
    console.log(resultadoAguardado);
  
}
buscarCepExemplo();

async function enviarCep(): Promise<void> {

    const dados: CEP = {
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

