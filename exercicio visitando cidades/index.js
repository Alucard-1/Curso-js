const viajante = prompt("Digite seu nome")
let pergunta = prompt("Já visitou alguma cidade? sim/não")
let ncidades = 0
let cidade = ""
let lugares = ""

while(pergunta === "sim") {
    cidade = prompt(" Qual o nome da cidade visitada? ")
    lugares += "-" + cidade  + "\n"  
    ncidades +=1
    pergunta = prompt("Você visitou alguma outra cidade? (sim/não)")
    
    
    //if  (cidade === "Mais nenhuma"){
   //     break
   // }
   // if (pergunta ==="não" ){
    //    break
        
    //}
  
   
    

   
   

    
}
    
    alert(viajante)
    alert(ncidades)
    alert(lugares)
