console.log(`Trabalhando com condicionas`)


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhado = false;
const temPassagemComprada = true;

//listaDeDestinos.push(`Curitiba`) 

console.log("Destinos possíveis: ");
console.log();
console.log(listaDeDestinos);

if(idadeComprador >= 18 || estaAcompanhado == true) {
    console.log("Comprador maior de Idade");
    listaDeDestinos.splice(1,1) //removendo itens   
} 
else {
    console.log("NÃO POSSO VENDER A PASSAGEM: Não é Maior de Idade e não esta acompanhada!");
}  
       
console.log("embarque: \n \n")
if(idadeComprador >= 18 && temPasagemComprda) {
    console.log("Boa Viagem!")
} else {
    console.log("Você não pode embarcar!")
}


console.log(listaDeDestinos);

console.log();
