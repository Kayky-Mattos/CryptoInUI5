sap.ui.define(
  ["sap/ui/model/odata/v2/ODataModel", "com/kayky/project1/model/sensitives"],
  function (ODataModel, sensitives) {
    "use strict";

    return {
      _pDataServicesInit: null,
      _oDataModel: null,
      _oComponent: null,

      init: function (oComponent) {
        this._oComponent = oComponent;
        const resolveUrl = oComponent
          .getManifestObject()
          .resolveUri("/northwind/northwind.svc/");

        this._oDataModel = new sap.ui.model.odata.v2.ODataModel(resolveUrl, {
          defaultUpdateMethod: sap.ui.model.odata.UpdateMethod.put,
        });
      },

      getAsset: function () {
        return new Promise((resolve, reject) => {
          var config = {
            method: "GET",
            url: "https://api.coincap.io/v2/assets",
            headers: {
              Authorization: sensitives.auth(),
            },
            success: function (response) {
              let dataAssets = response;

              fetch("../model/criptoIcons.json")
                .then((responseIcon) => {
                  return responseIcon.json();
                })
                .then((responseIcon) => {
                  let dataIcon = responseIcon;

                  Array.from(dataAssets.data).forEach((item) => {
                    const getUrl = Array.from(dataIcon.data).find(
                      (data) => data.symbol === item.symbol
                    );

                    if (getUrl) {
                      item.url_img = getUrl.img_url;
                      item.explorer = getUrl.img_url;
                    }
                  });
                })
                .catch((err) => {
                  console.error(err);
                });

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
