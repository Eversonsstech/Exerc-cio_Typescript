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


// GET e POST

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

async function buscarCep(): Promise<CEP> {

    // MÉTODO: GET
    // FINALIDADE: consultar os dados de um endereço através do CEP.
    // ENDPOINT: https://viacep.com.br/ws/01001000/json/

    // REQUEST:
    // O CEP é enviado na própria URL.
    // Neste exemplo, o CEP consultado é 01001000.


    const response = await fetch(
        "https://viacep.com.br/ws/01001000/json/"
    );

    // RESPONSE:
    // A API retorna os dados do CEP em formato JSON.
    // response.json() transforma a resposta JSON em um objeto JavaScript.
    // O "as CEP" informa ao TypeScript a estrutura esperada da resposta.

    const dados = await response.json() as CEP;

    return dados;
}

async function buscarCepExemplo() {
    const resultadoAguardado = await buscarCep();

    console.log(resultadoAguardado);
}

buscarCepExemplo();


async function enviarPost(): Promise<void> {

    // REQUEST:
    // Dados que serão enviados para a API através do método POST.
    // O JSONPlaceholder espera dados de um post.

    const dados = {
        title: "Meu primeiro post",
        body: "Estou estudando TypeScript e APIs.",
        userId: 1
    };

    // MÉTODO: POST
    // ENDPOINT: https://jsonplaceholder.typicode.com/posts
    // FINALIDADE: enviar dados para simular a criação de um novo post.

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            // REQUEST BODY:
            // JSON.stringify() transforma o objeto JavaScript em JSON
            // para que ele possa ser enviado no corpo da requisição.
            
            body: JSON.stringify(dados)
        }
    );

    const resultado = await response.json();

    console.log(resultado);
}

enviarPost();