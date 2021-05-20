let custo = 500;
let venda = 1000;
let imposto = 20;

let impostoSobreCusto = 20 * custo / 100;
let custoTotal = custo + impostoSobreCusto;
let lucro = venda - custoTotal;

let lucro1000 = 1000 * lucro;

if (custo > 0 && venda > 0) {
  console.log ('Se o produto for vendido mil vezes, o vendedor terá lucro de R$' + lucro1000);
}else{
  console.log('Valor inserido inválido'); 
}
  
// Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.