let custo = 500;
let venda = 1000;
let imposto = 20;

let impostoSoreCusto = 20 * custo / 100;
let custoTotal = custo + impostoSoreCusto;
let lucro = venda - custoTotal;

let lucro1000 = venda * lucro;

if (custo > 0 && venda > 0) {
  console.log ('Se o produto for vendido mil vezes, o vendedor terá lucro de ' + lucro1000 + 'R$');
}else if (custo < 0 || venda <0){
  console.log('Valor inserido inválido'); 
}
  