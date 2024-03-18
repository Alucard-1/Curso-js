const fila = [ "José", " Francisco ", "  Maria ", "Raimunda "]



do{

    escolha = prompt(
        "Pacientes na fila de espera: "+ fila +
        "\n 1. Agendar paciente" +
        "\n 2. Consultar paciente"+
        "\n 3. Sair"

    )

    switch(escolha){
        case "1":
            let novo = fila.push(prompt("Informe o nome do novo paciente"))
            break

        case "2":
            let sai = fila.shift()
            alert(" O paciente consultado foi " + fila[0])
            break

        case "3":
            alert("Saindo...")
            break

    }

}while(escolha != 3)

alert(indice.fila)










//for(let final = 0; final < fila.length; fila++) {
  //  const ordem = fila[final]
    //alert(ordem + "se encontra na posição" + final)
//}