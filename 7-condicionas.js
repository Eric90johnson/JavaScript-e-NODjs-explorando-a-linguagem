console.log(`Trabalhando com condicionas`)


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhado = false;

//listaDeDestinos.push(`Curitiba`) 

console.log("Destinos possíveis: ");
console.log();
console.log(listaDeDestinos);

if(idadeComprador >= 18) {
    console.log("Comprador maior de Idade");
    listaDeDestinos.splice(1,1) //removendo itens
    
} else if(estaAcompanhado) { //a pessoa é menor de idade
    console.log("Comprador é menor de idade e esta acompanhado");
    listaDeDestinos.splice(1,1); //
} else {
    console.log("NÃO POSSO VENDER A PASSAGEM: Não é Maior de Idade e não esta acompanhada!");
}  
       


console.log(listaDeDestinos);

console.log();