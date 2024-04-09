sap.ui.define(["sap/ui/core/format/NumberFormat"], (NumberFormat) => {
  "use strict";

  return {
    toUpperCase: function (sValue) {
      return sValue.toUpperCase();
    },
    formatPrice: function (value) {
      var oFormat = NumberFormat.getCurrencyInstance({
        currencyCode: false,
        customCurrencies: {
          MyDollar: {
            isoCode: "USD",
            decimals: 3,
          },
        },
      });

      if (value < 1 && value > 0 && value.toString().indexOf(".") !== -1) {
        var zerosLeft = NumberFormat.getCurrencyInstance({
          currencyCode: false,
          customCurrencies: {
            MyDollar: {
              isoCode: "USD",
              decimals: 6,
            },
          },
        });

        return zerosLeft.format(parseFloat(value), "MyDollar");
      }
      // symbol looked up from global configuration
      return oFormat.format(parseFloat(value), "MyDollar"); // "$123.457"
    },
    formatPricesMBT: function (value) {
      // Array com os sufixos de formatação
      var sufixos = ["", "k", "m", "b", "t"];
      // Variável para armazenar o índice do sufixo a ser usado
      var indice = 0;

      // Enquanto o número for maior que 1000, divida por 1000 e incremente o índice
      while (value >= 1000) {
        value /= 1000;
        indice++;
      }

      // Formate o número com 2 casas decimais
      if (value > 0) {
        var numeroFormatado = value.toFixed(2);
      }

      // Adicione o sufixo correspondente ao índice ao número formatado
      numeroFormatado = "$" + numeroFormatado + sufixos[indice];
      return numeroFormatado;
    },
    formatStatustxt: function (value) {
      var numeroFormatado = parseFloat(value).toFixed(2) + "%";
      return numeroFormatado;
    },
    formatStatus: function (value) {
      if (value < 0) {
        return "Error";
      }

      return "Success";
    },
  };
});
