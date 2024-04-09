sap.ui.define(
  [
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device",
    "com/kayky/project1/model/sensitives",
  ],
  /**
   * provide app-view type models (as in the first "V" in MVVC)
   *
   * @param {typeof sap.ui.model.json.JSONModel} JSONModel
   * @param {typeof sap.ui.Device} Device
   *
   * @returns {Function} createDeviceModel() for providing runtime info for the device the UI5 app is running on
   */
  function (JSONModel, Device, sensitives) {
    "use strict";

    return {
      createDeviceModel: function () {
        var oModel = new JSONModel(Device);
        oModel.setDefaultBindingMode("OneWay");
        return oModel;
      },
      getAssets: function () {
        return new Promise((resolve, reject) => {
          var config = {
            method: "GET",
            maxBodyLength: Infinity,
            url: "https://api.coincap.io/v2/assets",
            headers: {
              Authorization: sensitives.auth(),
            },
            success: function (response) {
              resolve(response);
            },
            error: function (err) {
              reject(err);
            },
          };
          $.ajax(config);
        });
      },
    };
  }
);
