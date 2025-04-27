sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/MessageBox",
    "sap/ui/model/ValidateException",
    'sap/ui/core/BusyIndicator',
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    'sap/ui/export/library',
    'sap/ui/export/Spreadsheet'
], (Controller, Filter, FilterOperator, MessageBox, ValidateException, BusyIndicator, JSONModel, MessageToast, library, Spreadsheet) => {
    "use strict";

    return Controller.extend("ui.codesaildashboard.controller.Main", {
        onInit() {
            this.oRouter = this.getOwnerComponent().getRouter();
            this.oRouter.getRoute("RouteMain").attachPatternMatched(this.onRouteMatched, this);
            this.getView().setModel(new JSONModel({ selectedKey: "OverviewId" }), "visibility");
        },

        onRouteMatched: function (evt) {
            if (evt.getParameter("name") !== "RouteMain") {
                return;
            }
            var oToolPage = this.byId("toolPage");
            oToolPage.setSideExpanded(true);
        },

        onSideNavButtonPress: function () {
            var oToolPage = this.byId("toolPage");
            var bSideExpanded = oToolPage.getSideExpanded();
            oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
        },

        onitemSelect(evt, key){
            this.oSource = evt;
            var key = evt.getParameter("item").getKey();
            this.SelectedKey = key;
            this.getView().getModel("visibility").setProperty("/selectedKey", key);
            // switch (key) {
            //     case "ExchangeRateID":
            //         // this.getExchangeRateData();
            //         break;
            //     case "CostCenterHeadID":
            //         // this.getCostCenterHeadData();
            //         break;
            //     case "CostCenterMasterID":
            //         // this.getCostCenterMasterData();
            //         break;
            //     case "JobAdministrationID":
            //         // this.getJobAdminData();
            //         // break;
            // }
            this.byId("pageContainer").to(this.getView().createId(key));
        }
    });
});