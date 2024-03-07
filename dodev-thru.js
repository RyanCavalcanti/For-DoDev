let valor
let quantidade
let opcao = prompt("Bem-Vindo ao DoDev-thru, você deseja:" + "\n1 - Abastecer com gasoline; \n2 - abastecer com álcool; \n3 - calibrar os pneus")

switch(opcao){
    case "1":
        valor = parseInt(prompt("Digite o valor desejado para abastecer"))
        quantidade = valor / 5;
        console.log("Foram abastecidos " + quntidade + "L de gasolina")
        break;
    case "2":
        valor = parseInt(prompt("Digite o valor desejado para abastecer"))
        quantidade = valor / 3;
        console.log("Foram abastecidos " + quntidade + "L de álcool")
        break;
    default:
        console.log("Pneus calibrados com sucesso")
        break;    
}