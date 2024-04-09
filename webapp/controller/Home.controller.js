sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "com/kayky/project1/model/models",
    "sap/m/library",
    "com/kayky/project1/model/formatter",
    "com/kayky/project1/model/sensitives",
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel, models, library, formatter, sensitives) {
    "use strict";

    return Controller.extend("com.kayky.project1.controller.Home", {
      formatter: formatter,
      onInit: function () {
        var that = this;
        models
          .getAssets()
          .then((response) => {
            var oModel = new JSONModel(response);
            that.getView().setModel(oModel, "Assets");
            console.log(response);
          })
          .catch((err) => {
            console.error(err);
          });
      },
      onPress: function () {},
    });
  }
);
