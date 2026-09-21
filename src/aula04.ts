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