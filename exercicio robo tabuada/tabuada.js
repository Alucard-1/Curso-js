let num = prompt("Infomre o número a ser multiplica")
num = parseFloat(num)

for(i=1; i<=20; i++) {
    let res = num * i
    alert( num+ " multiplicado por "+ i + " é igual " + res) 
}