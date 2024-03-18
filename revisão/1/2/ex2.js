const veiculo1 = prompt("Insira o nome do veiculo 1")
const vel1 = parseFloat(prompt("insira a velocidade do veiculo 1"))
const veiculo2 = prompt("Insira o nome do veiculo 2")
const vel2 = parseFloat(prompt("insira a velocidade do veiculo 2"))

if( vel1 > vel2) {
    alert("A velocidade do " + veiculo1 +" é maior que a velocidade do " + veiculo2)
   

 }   else
        if ( vel2 > vel1) 
            { alert("A velocidade do " + veiculo2 +" é maior que a velocidade do " + veiculo1)
        } else
            if(vel1 === vel2){
                alert("A velocidade dos veiculos são iguais!")

       
}



