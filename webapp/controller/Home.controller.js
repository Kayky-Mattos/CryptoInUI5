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
            that.getView().setModel(oModel, "Assets");
            that.getView().getModel("Assets").refresh(true);
          })
          .catch((err) => {
            console.error(err);
          });
      },
      onSearch: function (oEvent) {
        // add filter for search
        const aFilters = [];
        const sQuery = oEvent.getSource().getValue();
        const oList = this.byId("list");
        const oBinding = oList.getBinding("items");

        if (sQuery && sQuery.length > 0) {
          const filter = new Filter("name", FilterOperator.Contains, sQuery);
          aFilters.push(filter);
          // update list binding
          oBinding.filter(aFilters);
        } else {
          oBinding.filter([]);
        }
      },
      onPressButtonHmenuH: function (oEvent) {
        this.onPressButtonHmenu(oEvent);
      },
    });
  }
);
