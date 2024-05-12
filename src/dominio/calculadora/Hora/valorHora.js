const {
  HORAS_POR_DIA,
  DIAS_UTEIS_NO_MES
} = require('../constantes/constantes')

const calcularValorPorHora = (rendaMensal) => {
  const horasTrabalhadasPorMes = (HORAS_POR_DIA * DIAS_UTEIS_NO_MES);
  const valorPorHora = rendaMensal / horasTrabalhadasPorMes;

  return Math.ceil(valorPorHora);
};

<<<<<<< HEAD
exports.calcularValorPorHora = calcularValorPorHora;
=======
exports.calcularValorPorHora = calcularValorPorHora;
>>>>>>> 8c80a20cd268461c3df445c3825c9afd79c8a7cd
