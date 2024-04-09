function calcularPrecoPicole(sabor) {
    switch (sabor) {
      case "a":
        return 1.50;
      case "b":
      case "c":
        return 2.50;
      case "d":
        return 3.20;
      case "e":
        return 3.40;
      case "f":
        return 3.00;
      case "g":
        return 3.60;
      case "h":
        return 4.00;
      case "i":
        return 5.00;
      default:
        return "Sabor inválido";
    }
  }
  
  function mostrarPreco(sabor) {
    const preco = calcularPrecoPicole(sabor);
    if (preco === "Sabor inválido") {
      console.log(`O sabor ${sabor} não está disponível.`);
    } else {
      console.log(`O preço do picolé de ${sabor} é R$${preco.toFixed(2)}.`);
    }
  }

  console.log(calcularPrecoPicole(sabor));
  console.log(mostrarPreco(sabor));
  
  mostrarPreco("a"); 
  mostrarPreco("c"); 
  mostrarPreco("h"); 
  mostrarPreco("x"); 
  