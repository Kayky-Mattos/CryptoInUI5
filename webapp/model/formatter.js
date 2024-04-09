sap.ui.define([], function () {
  "use strict";

  return {
    removeZeroLeft: function () {},
    formatPrice: function (value) {
      const valueFloat = parseFloat(value);
      return "R$ " + valueFloat.toFixed(2).replace(".", ",");
    },
  };
});
