System.register(['angular2/core', './drawer.service.ts', './generator.service.ts', './math.service.ts', './options.component'], function(exports_1, context_1) {
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
    var core_1, core_2, drawer_service_ts_1, generator_service_ts_1, math_service_ts_1, options_component_1;
    var CanvasComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (drawer_service_ts_1_1) {
                drawer_service_ts_1 = drawer_service_ts_1_1;
            },
            function (generator_service_ts_1_1) {
                generator_service_ts_1 = generator_service_ts_1_1;
            },
            function (math_service_ts_1_1) {
                math_service_ts_1 = math_service_ts_1_1;
            },
            function (options_component_1_1) {
                options_component_1 = options_component_1_1;
            }],
        execute: function() {
            CanvasComponent = (function () {
                function CanvasComponent(_generator2DService, _mathService, _drawerService) {
                    this._generator2DService = _generator2DService;
                    this._mathService = _mathService;
                    this._drawerService = _drawerService;
                    this.arbre = new Image();
                    this.arbre.src = 'app/arbre.png';
                }
                CanvasComponent.prototype.ngAfterViewInit = function () {
                    var self = this;
                    var canvas = self.myCanvas.nativeElement;
                    canvas.width = canvas.parentElement.clientWidth;
                    var context = canvas.getContext("2d");
                    this.imgWidth = 50 / 2;
                    this.imgHeight = 53 / 2;
                    this._drawerService.init(context, canvas.width, canvas.height);
                };
                CanvasComponent.prototype.genererForet = function (event) {
                    var options = this.optionsForm.getOptions();
                    var params = {
                        nb: options.nb,
                        mx: event.clientX,
                        my: event.clientY,
                        vx: options.ecartTypeX * options.ecartTypeX,
                        vy: options.ecartTypeY * options.ecartTypeY,
                        textureWidth: this.imgWidth,
                        textureHeight: this.imgHeight
                    };
                    var self = this;
                    this._generator2DService.genererForet(params)
                        .then(function (result) {
                        var paramsAffichage = {
                            textureWidth: self.imgWidth,
                            textureHeight: self.imgHeight,
                            texture: self.arbre,
                            coefAgrandissementMin: options.coefAgrandissementMin,
                            coefAgrandissementMax: options.coefAgrandissementMax
                        };
                        self._drawerService.dessinerForet(result.centers, paramsAffichage);
                        self._mathService.calculerEnveloppeConvexe(result.nodes)
                            .then(function (enveloppe) {
                            self._drawerService.afficherEnveloppeConvexe(enveloppe);
                        });
                    });
                };
                __decorate([
                    core_2.ViewChild("myCanvas"), 
                    __metadata('design:type', Object)
                ], CanvasComponent.prototype, "myCanvas", void 0);
                __decorate([
                    core_2.ViewChild("optionsForm"), 
                    __metadata('design:type', options_component_1.OptionsComponent)
                ], CanvasComponent.prototype, "optionsForm", void 0);
                CanvasComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/canvas.component.html',
                        providers: [drawer_service_ts_1.DrawerService, math_service_ts_1.MathService, generator_service_ts_1.Generator2DService],
                        directives: [options_component_1.OptionsComponent]
                    }), 
                    __metadata('design:paramtypes', [generator_service_ts_1.Generator2DService, math_service_ts_1.MathService, drawer_service_ts_1.DrawerService])
                ], CanvasComponent);
                return CanvasComponent;
            }());
            exports_1("CanvasComponent", CanvasComponent);
        }
    }
});
//# sourceMappingURL=canvas.component.js.map