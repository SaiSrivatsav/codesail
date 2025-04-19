//@ui5-bundle ui/codesaildashboard/Component-preload.js
sap.ui.require.preload({
	"ui/codesaildashboard/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","ui/codesaildashboard/model/models"],(e,i)=>{"use strict";return e.extend("ui.codesaildashboard.Component",{metadata:{manifest:"json",interfaces:["sap.ui.core.IAsyncContentCreation"]},init(){e.prototype.init.apply(this,arguments);this.setModel(i.createDeviceModel(),"device");this.getRouter().initialize()}})});
},
	"ui/codesaildashboard/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],e=>{"use strict";return e.extend("ui.codesaildashboard.controller.App",{onInit(){}})});
},
	"ui/codesaildashboard/controller/Main.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],e=>{"use strict";return e.extend("ui.codesaildashboard.controller.Main",{onInit(){}})});
},
	"ui/codesaildashboard/i18n/i18n.properties":'# This is the resource bundle for ui.codesaildashboard\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Codesail - CI CD Tool\n\n#YDES: Application description\nappDescription=Codesail - CI CD Tool\n#XTIT: Main view title\ntitle=Codesail - CI CD Tool\n\n#XFLD,24\ncicd-deploy.flpTitle=Codesail\n\n#XFLD,25\ncicd-deploy.flpSubtitle=CI CD\n',
	"ui/codesaildashboard/manifest.json":'{"_version":"1.65.0","sap.app":{"id":"ui.codesaildashboard","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.17.3","toolsId":"630c3390-1731-4574-86ef-c10c77f0c0c7"},"dataSources":{"mainService":{"uri":"codesail/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"cicd-deploy":{"semanticObject":"cicd","action":"deploy","title":"{{cicd-deploy.flpTitle}}","subTitle":"{{cicd-deploy.flpSubtitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.134.1","libs":{"sap.m":{},"sap.ui.core":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"ui.codesaildashboard.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","controlAggregation":"pages","controlId":"app","transition":"slide","type":"View","viewType":"XML","path":"ui.codesaildashboard.view","async":true,"viewPath":"ui.codesaildashboard.view"},"routes":[{"name":"RouteMain","pattern":":?query:","target":["TargetMain"]}],"targets":{"TargetMain":{"id":"Main","name":"Main"}}},"rootView":{"viewName":"ui.codesaildashboard.view.App","type":"XML","id":"App","async":true}},"sap.cloud":{"public":true,"service":"codesail-approuter"}}',
	"ui/codesaildashboard/model/models.js":function(){
sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"ui/codesaildashboard/view/App.view.xml":'<mvc:View controllerName="ui.codesaildashboard.controller.App"\n    displayBlock="true"\n    xmlns:mvc="sap.ui.core.mvc"\n    xmlns="sap.m"><App id="app"></App></mvc:View>',
	"ui/codesaildashboard/view/Main.view.xml":'<mvc:View controllerName="ui.codesaildashboard.controller.Main"\n    xmlns:mvc="sap.ui.core.mvc"\n    xmlns="sap.m"><Page id="page" title="{i18n>title}"></Page></mvc:View>'
});
//# sourceMappingURL=Component-preload.js.map
