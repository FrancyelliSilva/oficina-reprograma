const {
    calcularHorasDeProjeto,
  } = require("../../dominio/calculadora/Projeto/horasPorProjeto");
  
  describe("Cálculo de horas totais para finalizar um projeto", () => {
    test("Dado um array com as funcionalidades desejadas no projeto, retorna a soma das horas necessárias", () => {
      const funcionalidades = ["setup", "responsividade"];
  
      const result = calcularHorasDeProjeto(funcionalidades);
      expect(result).toEqual(24);
    });

    test("Dado um array com as funcionalidades desejadas no projeto, retorna a soma das horas necessárias", () => {
      const funcionalidades = ["formulario", "otimizacao_seo"];
  
      const result = calcularHorasDeProjeto(funcionalidades);
      expect(result).toEqual(32);
    });

    test("Dado um array com as funcionalidades desejadas no projeto, retorna a soma das horas necessárias", () => {
      const funcionalidades = ["construcao_1_pagina", "integracao_mailchimp", "integracao_mailchimp"];
  
      const result = calcularHorasDeProjeto(funcionalidades);
      expect(result).toEqual(40);
    });
  });