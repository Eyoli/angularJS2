System.register(['angular2/platform/browser', './menu.component', './canvas.component', './croissance.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, menu_component_1, canvas_component_1, croissance_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (menu_component_1_1) {
                menu_component_1 = menu_component_1_1;
            },
            function (canvas_component_1_1) {
                canvas_component_1 = canvas_component_1_1;
            },
            function (croissance_component_1_1) {
                croissance_component_1 = croissance_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(menu_component_1.MenuComponent);
            browser_1.bootstrap(canvas_component_1.CanvasComponent);
            browser_1.bootstrap(croissance_component_1.CroissanceComponent);
        }
    }
});
//# sourceMappingURL=main.js.map