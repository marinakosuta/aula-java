const nome = "Marina"
let idade = 16;
const cidade = "londrina"
const hobby = "ser do marista"
const tempo = 3;
console.log("oii, meu nome é " + nome + ", tenho " + idade + " anos e sou de " + cidade);
console.log(cidade, nome, idade)



const idadeEmDias = idade * 365;
console.log("Minha idade em dias é:" + idadeEmDias)
const idadeEmMeses = idade * 12;
console.log("Minha idade em meses é:" + idadeEmMeses)
const tempoEmDias = tempo * 365;
console.log (" Meu tempo em dias é: " + tempoEmDias)


const precoUnit = 20
const qtde = 20
const subtotal = precoUnit * qtde;
const valorMinimoParaTerDesconto = 100;
const temDesconto = subtotal >= valorMinimoParaTerDesconto;

const cidadeCliente = "Londrina"
const cidadeLoja = "Londrina"
const freteGratis = temDesconto && (cidadeCliente == cidadeLoja)
const resultado = `Subtotal: R$ $ {subtotal}
Tem desconto: ${temDesconto}
Frete grátis: {freteGratis}`

console.log(resultado)

console.log (temDesconto)