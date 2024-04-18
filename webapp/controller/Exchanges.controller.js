sap.ui.define(
  [
    "com/kayky/project1/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    "com/kayky/project1/model/models",
    "sap/m/library",
    "com/kayky/project1/model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (
    Controller,
    JSONModel,
    models,
    library,
    formatter,
    Filter,
    FilterOperator
  ) {
    "use strict";

    return Controller.extend("com.kayky.project1.controller.Exchanges", {
      formatter: formatter,
      onInit: function () {},
      onPressButtonHmenuEX: function (oEvent) {
        this.onPressButtonHmenu(oEvent);
      },
    });
  }
);
