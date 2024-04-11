sap.ui.define(
  [
    "com/kayky/project1/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    "com/kayky/project1/model/models",
    "sap/m/library",
    "com/kayky/project1/model/formatter",
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel, models, library, formatter) {
    "use strict";

    return Controller.extend("com.kayky.project1.controller.Home", {
      formatter: formatter,
      onInit: function () {
        const oRouter = this.getRouter();
        oRouter.getRoute("RouteHome").attachMatched(this.onRouteLoad, this);
      },
      onRouteLoad: function () {
        var that = this;
        models
          .ReturnAssets()
          .then((response) => {
            var oModel = new JSONModel(response);
            oModel.refresh(true);
            that.getView().setModel(oModel, "Assets");
            console.log(oModel.oData);
          })
          .catch((err) => {
            console.error(err);
          });

        const url =
          "https://cryptofonts-token-icon-api1.p.rapidapi.com/1/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0";
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "f3dda00738mshdef821799ab4a39p11cce0jsnaa3b0dec6e6b",
            "X-RapidAPI-Host": "cryptofonts-token-icon-api1.p.rapidapi.com",
          },
        };
      },
    });
  }
);
