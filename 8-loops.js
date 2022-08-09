console.log(`\n Trabalhando com Loops`)


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhado = false;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";

//listaDeDestinos.push(`Curitiba`) 

console.log("\n Destinos possíveis: ");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true 
       
let contador = 0;
let destinoExiste = false;
while(contador<3) {
    
    if (listaDeDestinos[contador] == destino) {
        console.log("Destino existe");
        destinoExiste = true;
        break;
    } 
    contador += 1;
}

console.log("Destino existe: ", destinoExiste)
