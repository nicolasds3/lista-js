// A empresa Mawer precisa fazer o balanço financeiro anual, portanto te contrataram e disseram: faça um algoritmo que peça o ganho bruto e os gastos desta empresa para cada um dos 12 meses de um ano, e que mostre no final o ganho bruto anual, o gasto anual e o saldo financeiro, informando também se a empresa teve lucro ou prejuízo.

// Função para calcular o ganho líquido mensal
function calcularGanhoLiquidoMensal(ganhoBruto, gastos) {
    return ganhoBruto - gastos;
  }
  
  // Função para calcular o ganho bruto anual
  function calcularGanhoBrutoAnual(ganhosBrutosMensais) {
    let total = 0;
    for (let ganho of ganhosBrutosMensais) {
      total += ganho;
    }
    return total;
  }
  
  // Função para calcular o gasto anual
  function calcularGastoAnual(gastosMensais) {
    let total = 0;
    for (let gasto of gastosMensais) {
      total += gasto;
    }
    return total;
  }
  
  // Função para mostrar o resultado final
  function mostrarResultadoFinal(ganhoBrutoAnual, gastoAnual) {
    let saldoFinanceiro = ganhoBrutoAnual - gastoAnual;
    let resultado = saldoFinanceiro > 0 ? "Lucro" : "Prejuízo";
  
    console.log(`Ganho bruto anual: R$${ganhoBrutoAnual.toFixed(2)}`);
    console.log(`Gasto anual: R$${gastoAnual.toFixed(2)}`);
    console.log(`Saldo financeiro: R$${saldoFinanceiro.toFixed(2)}`);
    console.log(`Resultado: ${resultado}`);
  }
  
  // Array para armazenar os ganhos brutos mensais
  let ganhosBrutosMensais = [];
  
  // Array para armazenar os gastos mensais
  let gastosMensais = [];
  
  // Loop para pedir os dados de cada mês
  for (let i = 1; i <= 12; i++) {
    let ganhoBruto = parseFloat(
      prompt(`Digite o ganho bruto do mês ${i}: R$`)
    );
    let gasto = parseFloat(prompt(`Digite o gasto do mês ${i}: R$`));
  
    ganhosBrutosMensais.push(ganhoBruto);
    gastosMensais.push(gasto);
  }
  
  // Calcular o ganho bruto anual
  let ganhoBrutoAnual = calcularGanhoBrutoAnual(ganhosBrutosMensais);
  
  // Calcular o gasto anual
  let gastoAnual = calcularGastoAnual(gastosMensais);
  
  // Mostrar o resultado final
  mostrarResultadoFinal(ganhoBrutoAnual, gastoAnual);
  