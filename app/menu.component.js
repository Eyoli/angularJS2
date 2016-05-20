System.register(['angular2/core', 'angular2/router', './generator.service.ts', './math.service.ts', './canvas.component', './croissance.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, generator_service_ts_1, math_service_ts_1, canvas_component_1, croissance_component_1;
    var MenuComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (generator_service_ts_1_1) {
                generator_service_ts_1 = generator_service_ts_1_1;
            },
            function (math_service_ts_1_1) {
                math_service_ts_1 = math_service_ts_1_1;
            },
            function (canvas_component_1_1) {
                canvas_component_1 = canvas_component_1_1;
            },
            function (croissance_component_1_1) {
                croissance_component_1 = croissance_component_1_1;
            }],
        execute: function() {
            MenuComponent = (function () {
                function MenuComponent(_routerService) {
                    this._routerService = _routerService;
                    this.routes = _routerService.data;
                }
                MenuComponent.prototype.changerMenuActif = function (event) {
                    var menuItemList = event.currentTarget.children;
                    for (var i = 0; i < menuItemList.length; i++) {
                        if (menuItemList[i].firstChild.className === "router-link-active") {
                            menuItemList[i].className = "active";
                        }
                        else {
                            menuItemList[i].className = "";
                        }
                    }
                };
                MenuComponent.prototype.ngAfterViewInit = function () {
                };
                MenuComponent = __decorate([
                    core_1.Component({
                        selector: 'menu',
                        templateUrl: 'app/menu.component.html',
                        providers: [router_1.ROUTER_PROVIDERS, router_1.RouteData, generator_service_ts_1.Generator2DService, math_service_ts_1.MathService],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/foret',
                            name: 'Foret',
                            component: canvas_component_1.CanvasComponent
                        },
                        {
                            path: '/croissance',
                            name: 'Croissance',
                            component: croissance_component_1.CroissanceComponent,
                            useAsDefault: true
                        }
                    ]), 
                    __metadata('design:paramtypes', [router_1.RouteData])
                ], MenuComponent);
                return MenuComponent;
            }());
            exports_1("MenuComponent", MenuComponent);
        }
    }
});
//# sourceMappingURL=menu.component.js.map