System.register(['./textview', 'angular2/platform/browser', "rxjs/Rx"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var textview_1, browser_1;
    return {
        setters:[
            function (textview_1_1) {
                textview_1 = textview_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (_1) {}],
        execute: function() {
            browser_1.bootstrap(textview_1.ClickMeComponent);
        }
    }
});
// bootstrap(Sitem, [ROUTER_PROVIDERS,
// 	provide(APP_BASE_HREF, {useValue: '/haha'})
// ]); 
//# sourceMappingURL=main.js.map