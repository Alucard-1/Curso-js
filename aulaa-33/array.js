const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragon", "Legolas","Gimli"]
console.log(arr)

// Adicionar elementos no array
//push
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

//Adicionar no inicio do array
//unshift

arr.unshift("teste")
console.log(arr)
console.log(tamanho)


//remover Elementos
//pop

let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

//shift, remove do incio

ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

//Pesquisar por um elemento
//includes

const inclui = arr.includes("Gandalf")

//Pesquisaar pelo indice, indexOf

const indice = arr.indexOf("Gandalf")
console.log(indice)

//Cortar e Concatenar
//slice

const hobbits = arr.slice(0,4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

// concat, concatenar

const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)

// substituição dis eementos
//splice

const elmentos_Removidos = sociedade.splice(indice, 1,"Gandalf o cinzento") 
console.log(sociedade)
console.log(elmentos_Removidos)

//Iterar sobre os elementos

for(let indice = 0; indice < sociedade.length; indice++) {
    const elemento = sociedade[indice]
    console.log(elemento + "se encontra na posição" + indice)
}