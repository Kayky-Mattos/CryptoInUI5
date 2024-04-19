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
      onInit: function () {
        const oRouter = this.getRouter();
        oRouter
          .getRoute("RouteExchanges")
          .attachMatched(this.onRouteLoad, this);
      },
      onPressButtonHmenuEX: function (oEvent) {
        this.onPressButtonHmenu(oEvent);
      },
      onRouteLoad: function () {
        const list = this.byId("list");
        list.setBusy(true);
        var that = this;
        models
          .returnExchanges()
          .then((response) => {
            var oModel = new JSONModel(response);
            that.getView().setModel(oModel, "Exchanges");
            that.getView().getModel("Exchanges").refresh(true);
            console.log(oModel);
          })
          .catch((err) => {
            console.error(err);
          })
          .finally(() => {
            list.setBusy(false);
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
    });
  }
);
