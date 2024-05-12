<<<<<<< HEAD
const { MAX_HORAS_POR_PACOTE } = require("../constantes/constantes");

const calcularPacote = (totalDeHorasPorProjeto) =>
  Object.entries(MAX_HORAS_POR_PACOTE).find(
    ([key, value]) => value >= totalDeHorasPorProjeto
  )[0];

exports.calcularPacote = calcularPacote;
=======
const { MAX_HORAS_POR_PACOTE } = require('../constantes/constantes');

const calcularPacote = (totalDeHorasPorProjeto) => Object.entries(MAX_HORAS_POR_PACOTE)
  .find(([key, value]) => value > totalDeHorasPorProjeto
)[0];

exports.calcularPacote = calcularPacote;
>>>>>>> 8c80a20cd268461c3df445c3825c9afd79c8a7cd
