System.register(['./component', 'angular2/platform/browser', "rxjs/Rx"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var component_1, browser_1;
    return {
        setters:[
            function (component_1_1) {
                component_1 = component_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (_1) {}],
        execute: function() {
            browser_1.bootstrap(component_1.Sitem);
        }
    }
});
//# sourceMappingURL=main.js.map