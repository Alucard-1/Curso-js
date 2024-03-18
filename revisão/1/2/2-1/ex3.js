const person1 = prompt("Insira o nome do primeiro personagem")
const ataque1 = parseFloat(prompt("Insira o poder de ataque do personagem 1"))
let vida2 = parseFloat(prompt("insira os pontos de vida do personagem 2"))
const person2 = prompt("Insira o nome do segundo personagem")
const defesa = parseFloat(prompt("Insira os pontos de defesa do Personagem 2"))
const escudo = prompt("Ele possui escudo? s/n")
let dano = 0



if ( ataque1 > defesa && escudo === "n" ) { 
    dano = ataque1 - defesa
} else if (ataque1 > defesa && escudo === "s")
     {dano = ((ataque1-defesa)/2)   
} else {
      dano === 0
}
        

alert(person1 +" causou "+ dano + " de dano em " + person2)