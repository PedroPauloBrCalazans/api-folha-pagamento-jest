const somaHorasExtras = (salario, valorHorasExtras) =>
  salario + valorHorasExtras;

const calculaDesconto = (salario, desconto) => salario - desconto;

const verifiqueSe = (valor) => {
  const assercoes = {
    ehExatamenteIgualA(esperado) {
      if (valor !== esperado) {
        throw {};
      }
    },
  };
  return assercoes;
};

// const teste = (titulo, esperado, retornado) => {
//   if (esperado === retornado) {
//     console.log(`${titulo} passou`);
//   } else {
//     console.error(`${titulo} não passou`);
//   }
// };

const teste = (titulo, funcaoDeTeste) => {
  try {
    funcaoDeTeste();
    console.log(`${titulo} passou`);
  } catch (error) {
    console.error(`${titulo} não passou`);
  }
};

// teste("somaHorasExtras", 2500, somaHorasExtras(2000, 500));

// teste("calculaDesconto", 2200, calculaDescontos(2500, 300));

teste("somaHorasExtras", () => {
  const esperado = 2500;
  const retornado = somaHorasExtras(2000, 500);

  verifiqueSe(retornado).ehExatamenteIgualA(esperado);
});

teste("calculaDesconto", () => {
  const esperado = 2300;
  const retornado = calculaDesconto(2500, 200);

  verifiqueSe(retornado).ehExatamenteIgualA(esperado);
});
