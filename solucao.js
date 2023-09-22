const listaDeNotas = [10, 9.5, 8, 7.6]

let somaDasNotas = 0
let media = 0

function adicionarPonto (ponto){
    for (let i = 0; i < listaDeNotas.length; i++) {
        listaDeNotas[i] += ponto
    }
    for (let nota of listaDeNotas){
        somaDasNotas += nota
    }
    console.log (media = somaDasNotas / listaDeNotas.length)
}

adicionarPonto(1)
