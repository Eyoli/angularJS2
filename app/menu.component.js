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
    var core_1, core_2, router_1, generator_service_ts_1, math_service_ts_1, canvas_component_1, croissance_component_1;
    var MenuComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
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
                function MenuComponent(_generator2DService, _mathService) {
                    this._generator2DService = _generator2DService;
                    this._mathService = _mathService;
                }
                MenuComponent.prototype.afficherPanneau = function (numero) {
                    for (var i = 0; i < this.panneaux.nativeElement.children.length; i++) {
                        this.panneaux.nativeElement.children[i].style.display = "none";
                        this.menu.nativeElement.children[i].className = "";
                    }
                    this.panneaux.nativeElement.children[numero].style.display = "initial";
                    this.menu.nativeElement.children[numero].className = "active";
                };
                __decorate([
                    core_2.ViewChild("panneaux"), 
                    __metadata('design:type', Object)
                ], MenuComponent.prototype, "panneaux", void 0);
                __decorate([
                    core_2.ViewChild("menu"), 
                    __metadata('design:type', Object)
                ], MenuComponent.prototype, "menu", void 0);
                MenuComponent = __decorate([
                    core_1.Component({
                        selector: 'menu',
                        templateUrl: 'app/menu.component.html',
                        providers: [router_1.ROUTER_PROVIDERS, generator_service_ts_1.Generator2DService, math_service_ts_1.MathService],
                        directives: [router_1.ROUTER_DIRECTIVES, canvas_component_1.CanvasComponent, croissance_component_1.CroissanceComponent]
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
                    __metadata('design:paramtypes', [generator_service_ts_1.Generator2DService, math_service_ts_1.MathService])
                ], MenuComponent);
                return MenuComponent;
            }());
            exports_1("MenuComponent", MenuComponent);
        }
    }
});
//# sourceMappingURL=menu.component.js.map