console.log(`Trabalhando com listas`)

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`) // adicionando itens na lista

console.log("Destinos possíveis: ");
console.log();
console.log(listaDeDestinos);

console.log();
listaDeDestinos.splice(1,1) //remove intes da lista primeiro 1 = a posição a ser excluida e segundo 1 = a quintidade a ser excluida
console.log(listaDeDestinos);

console.log();