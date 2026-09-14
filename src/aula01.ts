// 1. Declare uma variável para cada tipo primitivo básico do TypeScript (string, number, boolean), atribuindo valores de sua escolha.  

let nome: string = "João Cana Brava";
let idade: number = 24;
let ativo: boolean = true;

// 2. Tente declarar uma variável do tipo number e atribuir a ela um valor do tipo string (ex: "vinte"). O que o TypeScript acusa? Anote o erro em comentário.  


//let casa: number = "paz"; //O tipo 'string' não pode ser atribuído ao tipo 'number'.

console.log(nome, idade, ativo);

// 3. Crie uma variável idade: number e escreva uma estrutura condicional (if/else) que exiba "Maior de idade" se for maior ou igual a 18, e "Menor de idade" caso contrário. 

    let pessoa: number = 21


    if (pessoa >= 18){
        console.log("Maior de idade")
    }else{
        console.log("Menor de idade")
    }
// 4. Crie uma variável nota: number e utilize if / else if / else para classificar a nota em "Aprovado" (nota >= 7), "Recuperação" (nota >= 5 e < 7) ou "Reprovado" (nota < 5). 

let nota: number = 7

if (nota >=7 ){
    console.log("Aluno aprovado")
}else if (nota <=5 && nota < 7){
    console.log("Aluno em recuperação")
}else{
    console.log("Aluno reprovado")
}

//5. Crie uma variável diaDaSemana: number (1 a 7) e utilize um switch para exibir o nome do dia correspondente. 

let diaDaSemana: number = 1;

switch (diaDaSemana) {
    case 1:
        console.log("Domingo");
        break;

    case 2:
        console.log("Segunda-feira");
        break;

    case 3:
        console.log("Terça-feira");
        break;

    case 4:
        console.log("Quarta-feira");
        break;
    
    case 5:
        console.log("Quinta-feira");
        break;

    case 6:
        console.log("Sexta-feira");
        break;

    case 7:
        console.log("Sábado");
        break;

    default:
        console.log("Dia inválido");
}

//6. Utilize um loop for para exibir no console os números de 1 a 10.

for (let i= 1; i <=10; i++){
    console.log(i)
}

//7. Utilize um loop while para exibir apenas os números pares entre 1 e 20. 

let numero: number = 1;

while (numero <= 20) {

    if (numero % 2 === 0) {
        console.log(numero);
    }

    numero++;
}

//8. Crie um array numeros: number[] com pelo menos 5 valores e utilize um loop for...of para somar todos os elementos, exibindo o total ao final. 

let valores: number[] =[2,6,8,10,12]

let soma: number = 0;
for (const total of valores){
    soma += total;
}

console.log(soma)

// 9. Utilize um loop for combinado com uma condicional para exibir apenas os números ímpares entre 1 e 15.


for (let i = 1; i <= 15; i++) {

    if (i % 2 !== 0) {
        console.log(i);
    }

}

// 10. Desafio: combine tudo o que foi visto — crie um array de números, percorra com um loop e, para cada número, utilize uma condicional para classificá-lo como "par" ou "ímpar", exibindo o resultado no console.


let numeros: number[] = [2, 5, 8, 11, 14, 17];

for (const numero of numeros) {

    if (numero % 2 === 0) {
        console.log(numero + " é par");
    } else {
        console.log(numero + " é ímpar");
    }

}


let cor: string = "verde";

 cor = "amarelo";
 cor = "vermelho";

if (cor === "verde" || cor === "amarelo"){
    console.log("passe")
}
else{
    console.log("não passe")
}