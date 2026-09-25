# Exercícios de TypeScript — Módulo 2

Este projeto reúne os exercícios iniciais de **TypeScript**, com foco nos conceitos básicos de tipos, estruturas condicionais, estruturas de repetição, arrays e operadores.

## Objetivo

Praticar os principais fundamentos da linguagem TypeScript por meio de exercícios simples e progressivos.

## Conteúdos praticados

### 1. Tipos primitivos

Foram declaradas variáveis utilizando os três tipos primitivos básicos trabalhados no exercício:

- `string` — para textos;
- `number` — para números;
- `boolean` — para valores verdadeiro ou falso.

Exemplo:

```ts
let nome: string = "João Cana Brava";
let idade: number = 24;
let ativo: boolean = true;
```

### 2. Tipagem e erro do TypeScript

Foi realizado um teste proposital atribuindo um valor do tipo `string` a uma variável declarada como `number`.

```ts
// let casa: number = "paz";
```

O TypeScript acusa o erro:

```text
O tipo 'string' não pode ser atribuído ao tipo 'number'.
```

Esse exercício demonstra a importância da **tipagem estática** do TypeScript, que identifica incompatibilidades entre os tipos antes da execução do código.

### 3. Estrutura condicional `if / else`

Foi criada uma variável numérica para representar uma idade e utilizada uma estrutura condicional para verificar se a pessoa é maior ou menor de idade.

Regra utilizada:

- idade maior ou igual a 18 → `Maior de idade`;
- idade menor que 18 → `Menor de idade`.

### 4. Classificação de nota

Foi utilizada a estrutura `if / else if / else` para classificar uma nota.

As categorias propostas foram:

- nota maior ou igual a 7 → `Aprovado`;
- nota maior ou igual a 5 e menor que 7 → `Recuperação`;
- nota menor que 5 → `Reprovado`.

> Observação: no código desenvolvido, a condição de recuperação foi inicialmente escrita como `nota <= 5 && nota < 7`. A lógica correta para representar o intervalo solicitado é `nota >= 5 && nota < 7`.

### 5. Estrutura `switch`

Foi criada a variável `diaDaSemana` e utilizada uma estrutura `switch` para relacionar números de 1 a 7 aos respectivos dias da semana.

A estrutura também possui um `default` para tratar valores inválidos.

### 6. Loop `for`

Foi utilizado um loop `for` para percorrer e exibir os números de 1 a 10 no console.

```ts
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```

### 7. Loop `while` e números pares

Foi utilizado um loop `while` para percorrer os números de 1 a 20.

O operador módulo `%` foi utilizado para verificar quais números são pares:

```ts
numero % 2 === 0
```

Quando o resto da divisão por 2 é zero, o número é par.

### 8. Arrays e `for...of`

Foi criado um array do tipo `number[]` contendo cinco valores.

```ts
let valores: number[] = [2, 6, 8, 10, 12];
```

Em seguida, foi utilizado um loop `for...of` para percorrer os elementos e acumular a soma em uma variável.

Resultado:

```text
38
```

### 9. Loop `for` e números ímpares

Foi utilizado um loop `for` combinado com uma condicional para exibir somente os números ímpares entre 1 e 15.

A verificação utilizada foi:

```ts
i % 2 !== 0
```

### 10. Desafio — classificação entre par e ímpar

No desafio final, os conceitos estudados foram combinados.

Foi criado um array de números:

```ts
let numeros: number[] = [2, 5, 8, 11, 14, 17];
```

O array foi percorrido com `for...of` e cada número foi classificado utilizando uma condicional.

Exemplo de saída:

```text
2 é par
5 é ímpar
8 é par
11 é ímpar
14 é par
17 é ímpar
```

## Conceitos consolidados

Ao concluir os exercícios, foram praticados:

- declaração de variáveis;
- tipos `string`, `number` e `boolean`;
- tipagem estática;
- identificação de erros de tipo;
- `if / else`;
- `else if`;
- `switch / case / default`;
- `for`;
- `while`;
- arrays;
- `for...of`;
- operador módulo `%`;
- operadores de comparação;
- condicionais;
- soma e acumulação de valores;
- classificação de números como pares ou ímpares;
- saída de informações com `console.log()`.

## Estrutura do projeto

A organização utilizada é:

```text
2_modulo/
├── src/
│   ├── aula01.ts
│   └── aula02.ts
├── dist/
├── node_modules/
├── package.json
├── package-lock.json
├── tsconfig.json
└── .gitignore
```

### `src`

Contém os arquivos-fonte escritos em TypeScript.

### `dist`

Contém os arquivos gerados pelo compilador TypeScript.

### `node_modules`

Contém as dependências instaladas do projeto e não deve ser versionado no Git.

### `tsconfig.json`

Contém as configurações utilizadas pelo compilador TypeScript.

### `.gitignore`

Utilizado para impedir que arquivos e pastas desnecessários, como `node_modules`, sejam enviados para o repositório.

## Execução

O projeto utiliza o compilador TypeScript para transformar os arquivos `.ts` em arquivos JavaScript.

Para compilar:

```powershell
tsc
```

Depois da compilação, um arquivo JavaScript gerado pode ser executado com:

```powershell
node dist/aula01.js
```

ou:

```powershell
node dist/aula02.js
```

## Observação sobre o exercício 2

O erro de atribuição de `string` para `number` foi colocado propositalmente para demonstrar a verificação de tipos do TypeScript.

Como o código contém um erro intencional quando essa linha é ativada, a compilação pode apresentar erro no `tsc`. A linha foi mantida comentada no exercício para que o projeto possa ser compilado normalmente.

---

**Projeto de estudo — TypeScript / Módulo 2**


# EVERSON e LUIZ FELLIPE

## 1. O que o await faz?

O await faz o programa esperar o resultado de uma operação assíncrona antes de continuar. Ele é usado para esperar a resolução de uma Promise.

## 2. Qual método HTTP corresponde a cada letra do CRUD?

Create → POST, Read → GET, Update → PUT/PATCH e Delete → DELETE.

## 3. Por que o fetch não dá erro quando a API responde 404?

O fetch não considera o status 404 uma exceção. Ele recebe a resposta normalmente, por isso precisamos verificar response.ok ou response.status para identificar o erro.

## 4. Por que o post criado não apareceu na lista?

A JSONPlaceholder é uma API de testes e não salva as alterações permanentemente. Por isso, o post criado é retornado pela API, mas não aparece depois na lista.
