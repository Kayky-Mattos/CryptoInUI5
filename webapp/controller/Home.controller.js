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
            // console.log(response);
            that.getView().setModel(oModel, "Assets");
            that.getView().getModel("Assets").refresh(true);
          })
          .catch((err) => {
            console.error(err);
          });
      },
    });
  }
);
