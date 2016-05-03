System.register(['./component', 'angular2/platform/browser', "rxjs/Rx", 'angular2/router', 'angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var component_1, browser_1, router_1, core_1;
    return {
        setters:[
            function (component_1_1) {
                component_1 = component_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(component_1.Sitem, [router_1.ROUTER_PROVIDERS,
                core_1.provide(router_1.APP_BASE_HREF, { useValue: '/haha' })
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map