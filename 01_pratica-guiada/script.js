//CODIGO AQUI

//PRÁTICA 1

//const valorDoProduto = +prompt("Insira o valor do produto?") //Number
//const porcentagemDoDesconto = Number (prompt("Digite a porcentagem do desconto?"))//Number

//const valorDoDesconto = valorDoProduto*(porcentagemDoDesconto/100)
//console.log("Valor do desconto é de R$",valorDoDesconto)



//const valorDoProdutoComDesconto = valorDoProduto - valorDoDesconto
//console.log("O Valor do produto com desconto é de R$",valorDoProdutoComDesconto);


//PRÁTICA 2

//IMC = peso / (altura x altura)


//const pesoAntesDoExercicio = +prompt ("qual seu peso anterior?")
//const pesoMaromba = +prompt ("Qual seu peso depois do exercicio?")
//const altura = +prompt ("qual sua altura em cm?")



//const imcAnteior = pesoAntesDoExercicio /(altura*altura)
//const imcMaromba = pesoMaromba /(altura*altura)

//console.log("Seu IMC era", imcAnteior);
//console.log("Seu IMC atual é", imcMaromba);
//console.log("O IMC atual é maior ou igual ao anterior?",imcMaromba>=imcAnteior)
//console.log("O IMC atual é menor ou igual ao anterior?",imcMaromba<=imcAnteior)



//PRÁTICA 3


//const anoDeNascimentoCliente = +prompt ("Qual ano voce nasceu?")
//const anoDeNascimentoAcompanhante = +prompt ("Qual ano seu acompanhante nasceu?")
//const anoMaiorDeIdade = 2005

//console.log(anoDeNascimentoCliente <= anoMaiorDeIdade && anoDeNascimentoAcompanhante <= anoMaiorDeIdade) //ambos true
//console.log(anoDeNascimentoCliente <= anoMaiorDeIdade || anoDeNascimentoAcompanhante <= anoMaiorDeIdade) //apenas um true
//console.log(!(anoDeNascimentoCliente <= anoMaiorDeIdade))//retorna o oposto
//console.log(!(anoDeNascimentoAcompanhante <= anoMaiorDeIdade))//retorna o oposto


// PRÁTICA EXTRA

const idadeUsuario = +prompt ("Me informe sua idade, por favor")
const idadeAmige = +prompt ("Agora me informe a idade da sua amizade mais próxima")
const diferencaIdade = idadeUsuario - idadeAmige
console.log("Sua idade é maior que a do seu amigo?", idadeUsuario > idadeAmige)
console.log("E a diferença de idade de vocês é de:", diferencaIdade, "anos.")