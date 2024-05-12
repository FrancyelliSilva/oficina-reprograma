const { HORAS_POR_FUNCIONALIDADE } = require('../constantes/constantes');

<<<<<<< HEAD
const calcularHorasDeProjeto = (listaDeFuncionalidades) => {
  return listaDeFuncionalidades
    .map(func => HORAS_POR_FUNCIONALIDADE[func])
    .reduce((sum, currentValue) => sum + currentValue, 0)
};

exports.calcularHorasDeProjeto = calcularHorasDeProjeto;
=======
const calcularHorasDeProjeto = (listaDeFuncionalidades) => (
  listaDeFuncionalidades
    .map(func => HORAS_POR_FUNCIONALIDADE[func])
    .reduce((sum, currentValue) => sum + currentValue, 0)
);

exports.calcularHorasDeProjeto = calcularHorasDeProjeto;
>>>>>>> 8c80a20cd268461c3df445c3825c9afd79c8a7cd
