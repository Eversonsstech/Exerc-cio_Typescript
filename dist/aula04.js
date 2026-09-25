// ======================================================
// ASYNC E AWAIT
// ======================================================
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
// ======================================================
// SETTIMEOUT
// ======================================================
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
    // MÉTODO: GET
    // FINALIDADE: consultar os dados de um endereço através do CEP.
    // ENDPOINT: https://viacep.com.br/ws/01001000/json/
    // REQUEST:
    // O CEP é enviado na própria URL.
    // Neste exemplo, o CEP consultado é 01001000.
    const response = await fetch("https://viacep.com.br/ws/01001000/json/");
    // RESPONSE:
    // A API retorna os dados do CEP em formato JSON.
    // response.json() transforma a resposta JSON em um objeto JavaScript.
    // O "as CEP" informa ao TypeScript a estrutura esperada da resposta.
    const dados = await response.json();
    return dados;
}
async function buscarCepExemplo() {
    const resultadoAguardado = await buscarCep();
    console.log(resultadoAguardado);
}
buscarCepExemplo();
// ======================================================
// 1. GET — BUSCAR LISTA DE POSTS
// ======================================================
async function buscarListaPosts() {
    try {
        // MÉTODO: GET
        // ENDPOINT: https://jsonplaceholder.typicode.com/posts
        // FINALIDADE: Buscar a lista de posts disponível na API.
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        // VERIFICAÇÃO DE RESPOSTA:
        // response.ok retorna true quando o status HTTP está entre 200 e 299.
        // Dessa forma, podemos verificar se a requisição foi realizada com sucesso.
        if (response.ok) {
            // RESPONSE:
            // response.json() transforma a resposta JSON da API
            // em um array de objetos JavaScript.
            const posts = await response.json();
            // RESULTADO:
            // Mostra o título dos três primeiros posts.
            console.log("Títulos dos 3 primeiros posts:");
            console.log(posts[0].title);
            console.log(posts[1].title);
            console.log(posts[2].title);
        }
        else {
            console.log("Erro ao buscar os posts.");
            console.log("Status:", response.status);
        }
    }
    catch (error) {
        console.error("Erro na requisição:", error);
    }
}
buscarListaPosts();
// ======================================================
// 2. GET — BUSCAR POST DE ID 1
// ======================================================
async function buscarPostPorId() {
    try {
        // MÉTODO: GET
        // ENDPOINT: https://jsonplaceholder.typicode.com/posts/1
        // FINALIDADE: Buscar o post específico de ID 1.
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        // VERIFICAÇÃO DE RESPOSTA:
        // response.ok retorna true quando o status HTTP está entre 200 e 299.
        if (response.ok) {
            // RESPONSE:
            // response.json() transforma a resposta JSON da API
            // em um objeto JavaScript.
            const resultado = await response.json();
            // RESULTADO:
            // Mostra o título do post de ID 1.
            console.log("Título do post de ID 1:");
            console.log(resultado.title);
        }
        else {
            console.log("Erro ao buscar o post.");
            console.log("Status:", response.status);
        }
    }
    catch (error) {
        console.error("Erro na requisição:", error);
    }
}
buscarPostPorId();
// ======================================================
// 3. POST — CRIAR POST
// ======================================================
async function enviarPost() {
    try {
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
        // FINALIDADE: Enviar dados para simular a criação de um novo post.
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            // HEADERS:
            // Informa ao servidor que o corpo da requisição está no formato JSON.
            headers: {
                "Content-Type": "application/json"
            },
            // REQUEST BODY:
            // JSON.stringify() transforma o objeto JavaScript em JSON
            // para que ele possa ser enviado no corpo da requisição.
            body: JSON.stringify(dados)
        });
        // VERIFICAÇÃO DE RESPOSTA:
        // response.ok retorna true quando o status HTTP está entre 200 e 299.
        if (response.ok) {
            // RESPONSE:
            // response.json() transforma a resposta JSON da API
            // em um objeto JavaScript.
            const resultado = await response.json();
            console.log("Post criado com sucesso:");
            console.log(resultado);
        }
        else {
            console.log("Erro ao criar o post.");
            console.log("Status:", response.status);
        }
    }
    catch (error) {
        console.error("Erro na requisição:", error);
    }
}
enviarPost();
// ======================================================
// 4. PUT — ATUALIZAR POST DE ID 1
// ======================================================
async function atualizarPost() {
    try {
        // REQUEST:
        // Dados que serão enviados para a API através do método PUT.
        // O JSONPlaceholder espera os dados do post que será atualizado.
        const dados = {
            id: 1,
            title: "Novo título do post",
            body: "Estou atualizando este post com TypeScript.",
            userId: 1
        };
        // MÉTODO: PUT
        // ENDPOINT: https://jsonplaceholder.typicode.com/posts/1
        // FINALIDADE: Atualizar/substituir os dados do post de ID 1.
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PUT",
            // HEADERS:
            // Informa ao servidor que o corpo da requisição está no formato JSON.
            headers: {
                "Content-Type": "application/json"
            },
            // REQUEST BODY:
            // JSON.stringify() transforma o objeto JavaScript em uma
            // string JSON para que possa ser enviada no corpo da requisição.
            body: JSON.stringify(dados)
        });
        // VERIFICAÇÃO DE RESPOSTA:
        // response.ok retorna true quando o status HTTP está entre 200 e 299.
        if (response.ok) {
            // RESPONSE:
            // response.json() transforma a resposta JSON da API
            // em um objeto JavaScript.
            const resultado = await response.json();
            console.log("Post atualizado com sucesso:");
            console.log(resultado);
        }
        else {
            console.log("Erro ao atualizar o post.");
            console.log("Status:", response.status);
        }
    }
    catch (error) {
        console.error("Erro na requisição:", error);
    }
}
atualizarPost();
// ======================================================
// 5. DELETE — APAGAR POST DE ID 1
// ======================================================
async function apagarPost() {
    try {
        // MÉTODO: DELETE
        // ENDPOINT: https://jsonplaceholder.typicode.com/posts/1
        // FINALIDADE: Enviar uma requisição para remover o post de ID 1.
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "DELETE"
        });
        // VERIFICAÇÃO DE RESPOSTA:
        // response.ok retorna um booleano (true para status HTTP 200-299)
        // permitindo verificar se a remoção foi aceita com sucesso pela API.
        if (response.ok) {
            console.log("Post apagado com sucesso!");
        }
        else {
            console.log("Erro ao apagar o post.");
            console.log("Status:", response.status);
        }
    }
    catch (error) {
        console.error("Erro na requisição:", error);
    }
}
apagarPost();
// ======================================================
// 6. GET — TESTAR POST INEXISTENTE
// ======================================================
async function buscarPostInexistente() {
    try {
        // MÉTODO: GET
        // ENDPOINT: https://jsonplaceholder.typicode.com/posts/99999
        // FINALIDADE: Tentar buscar um post que não existe,
        // para testar o tratamento de erro da API.
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/99999");
        // VERIFICAÇÃO DE RESPOSTA:
        // O fetch não lança uma exceção automaticamente quando a API
        // retorna um erro HTTP, como o status 404.
        // Por isso, é necessário verificar response.ok.
        if (response.ok) {
            // RESPONSE:
            // response.json() transforma a resposta JSON da API
            // em um objeto JavaScript.
            const resultado = await response.json();
            console.log("Post encontrado:");
            console.log(resultado);
        }
        else {
            console.log("Erro ao buscar o post.");
            console.log("Post não encontrado.");
            console.log("Status:", response.status);
        }
    }
    catch (error) {
        console.error("Erro na requisição:", error);
    }
}
buscarPostInexistente();
export {};
//# sourceMappingURL=aula04.js.map