//CODIGO AQUI

const valorDoProduto = +prompt("Insira o valor do produto?") //Number
const porcentagemDoDesconto = Number (prompt("Digite a porcentagem do desconto?"))//Number

const valorDoDesconto = valorDoProduto*(porcentagemDoDesconto/100)
console.log("Valor do desconto é de R$",valorDoDesconto)



const valorDoProdutoComDesconto = valorDoProduto - valorDoDesconto
console.log("O Valor do produto com desconto é de R$",valorDoProdutoComDesconto)