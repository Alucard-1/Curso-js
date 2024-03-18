const metros = parseFloat(prompt("Digite um valor em metros"))
let convertido = 0
let opcao = ""

do{
    opcao = prompt(
        "Para qual unidade quer que " + metros + "m seja convertido? " +
        "\n 1. milímetro (mm)" +
        "\n2. centímetros (cm)" +
        "\n3. decímetro (dm)" +
        "\n4. decâmetro (dam)" +
        "\n5. hectômetro (hm)" +
        "\n6. quilômetro (Km)" +
        "\n7. Sair"

    )

    switch(opcao) {
        case "1":
            convertido = metros * 1000  + " mm" 
            alert(convertido)
            break
        
         case "2":
            convertido = metros * 100  + " cm" 
            alert(convertido)
            break
        case "3":
            convertido = metros * 10  + " dm" 
            alert(convertido)
            break
        case "4":
            convertido = metros / 10  + " dam" 
            alert(convertido)
            break
        case "5":
             convertido = metros / 100  + " hm" 
             alert(convertido)
             break
        case "6":
            convertido = metros / 1000  + " km" 
            alert(convertido)
            break
        case "7":
            alert("Saindo...")
            break
        default:
            alert("Entrada iválida")
        }



}while(opcao!=7)