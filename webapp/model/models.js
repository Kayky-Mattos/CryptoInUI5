sap.ui.define(
  [
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device",
    "com/kayky/project1/connection/connector",
    "sap/m/MessageBox",
  ],
  /**
   * provide app-view type models (as in the first "V" in MVVC)
   *
   * @param {typeof sap.ui.model.json.JSONModel} JSONModel
   * @param {typeof sap.ui.Device} Device
   *
   * @returns {Function} createDeviceModel() for providing runtime info for the device the UI5 app is running on
   */
  function (JSONModel, Device, connector, MessageBox) {
    "use strict";

    return {
      createDeviceModel: function () {
        var oModel = new JSONModel(Device);
        oModel.setDefaultBindingMode("OneWay");
        return oModel;
      },

      ReturnAssets: function () {
        return connector
          .getAsset()
          .then((response) => {
            return response;
          })
          .catch((err) => {
            return err;
          });
      },
    };
  }
);
