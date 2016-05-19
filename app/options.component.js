System.register(['angular2/core', './drawer.service.ts', './options.ts'], function(exports_1, context_1) {
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
    var core_1, drawer_service_ts_1, options_ts_1;
    var OptionsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (drawer_service_ts_1_1) {
                drawer_service_ts_1 = drawer_service_ts_1_1;
            },
            function (options_ts_1_1) {
                options_ts_1 = options_ts_1_1;
            }],
        execute: function() {
            OptionsComponent = (function () {
                function OptionsComponent(_drawerService) {
                    this._drawerService = _drawerService;
                    this.options = new options_ts_1.Options(1000, 200, 50, 0.50, 2);
                }
                OptionsComponent.prototype.getOptions = function () {
                    return this.options;
                };
                OptionsComponent.prototype.reset = function () {
                    this._drawerService.reset();
                };
                OptionsComponent = __decorate([
                    core_1.Component({
                        selector: 'options',
                        templateUrl: 'app/options.component.html'
                    }), 
                    __metadata('design:paramtypes', [drawer_service_ts_1.DrawerService])
                ], OptionsComponent);
                return OptionsComponent;
            }());
            exports_1("OptionsComponent", OptionsComponent);
        }
    }
});
//# sourceMappingURL=options.component.js.map