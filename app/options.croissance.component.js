System.register(['angular2/core', './drawer.service.ts'], function(exports_1, context_1) {
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
    var core_1, drawer_service_ts_1;
    var OptionsCroissanceComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (drawer_service_ts_1_1) {
                drawer_service_ts_1 = drawer_service_ts_1_1;
            }],
        execute: function() {
            OptionsCroissanceComponent = (function () {
                function OptionsCroissanceComponent(_drawerService) {
                    this._drawerService = _drawerService;
                }
                OptionsCroissanceComponent.prototype.reset = function () {
                    this._drawerService.reset();
                };
                OptionsCroissanceComponent = __decorate([
                    core_1.Component({
                        selector: 'optionsCroissance',
                        templateUrl: 'app/options.croissance.component.html'
                    }), 
                    __metadata('design:paramtypes', [drawer_service_ts_1.DrawerService])
                ], OptionsCroissanceComponent);
                return OptionsCroissanceComponent;
            }());
            exports_1("OptionsCroissanceComponent", OptionsCroissanceComponent);
        }
    }
});
//# sourceMappingURL=options.croissance.component.js.map