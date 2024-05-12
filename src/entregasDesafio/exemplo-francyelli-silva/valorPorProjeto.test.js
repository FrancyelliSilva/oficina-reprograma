const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto");
const pacote = require("../../dominio/calculadora/Projeto/pacote");

jest.mock("../../dominio/calculadora/Projeto/pacote.js");

describe("Valor do Projeto", () => {
  test("retorna valor total para um projeto com funcionalidades básicas e valor da hora", () => {
    pacote.calcularPacote.mockReturnValue("pacote_basico");

    const funcionalidades = ["setup", "formulario", "responsividade", "construcao_1_pagina"];
    const valorHora = 70;
    const result = calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(result).toEqual(3696);
  });

  test("retorna valor total para um projeto com funcionalidades adicionais e valor da hora", () => {
    pacote.calcularPacote.mockReturnValue("pacote_intermediario");

    const funcionalidades = ["setup", "formulario", "responsividade", "construcao_1_pagina", "ssr"];
    const valorHora = 90;
    const result = calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(result).toEqual(6048);
  });

  test("retorna valor total para um projeto com funcionalidades adicionais e valor da hora", () => {
    pacote.calcularPacote.mockReturnValue("pacote_premium");

    const funcionalidades = ["setup", "formulario", "responsividade", "construcao_1_pagina", "ssr",
    "integracao_mailchimp","integracao_api_propria","otimizacao_seo"];
    const valorHora = 100;
    const result = calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(result).toEqual(15600);
  });
});
