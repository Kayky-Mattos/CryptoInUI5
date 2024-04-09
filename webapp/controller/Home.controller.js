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
      onInit: function () {
        const that = this;
        let config = {
          method: "GET",
          maxBodyLength: Infinity,
          url: "https://api.coincap.io/v2/assets",
          async: false,
          headers: {
            Authorization: sensitives.auth(),
          },
          success: function (response) {
            const oModel = new JSONModel(response);
            that.getView().setModel(oModel, "Assets");
            console.log(response);
          }.bind(this),
          error: function (err) {
            console.log(err);
          },
        };
        $.ajax(config);
      },
      onPress: function () {},
    });
  }
);
