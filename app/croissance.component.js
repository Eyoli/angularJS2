System.register(['angular2/core', './generator.service.ts', './math.service.ts', './drawer.service.ts', './arbre'], function(exports_1, context_1) {
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
    var core_1, core_2, generator_service_ts_1, math_service_ts_1, drawer_service_ts_1, arbre_1;
    var CroissanceComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (generator_service_ts_1_1) {
                generator_service_ts_1 = generator_service_ts_1_1;
            },
            function (math_service_ts_1_1) {
                math_service_ts_1 = math_service_ts_1_1;
            },
            function (drawer_service_ts_1_1) {
                drawer_service_ts_1 = drawer_service_ts_1_1;
            },
            function (arbre_1_1) {
                arbre_1 = arbre_1_1;
            }],
        execute: function() {
            CroissanceComponent = (function () {
                function CroissanceComponent(_generator2DService, _mathService, _drawerService) {
                    this._generator2DService = _generator2DService;
                    this._mathService = _mathService;
                    this._drawerService = _drawerService;
                    this.textureArbre = new Image();
                    this.textureArbre.src = 'app/arbre.png';
                }
                CroissanceComponent.prototype.ngAfterViewInit = function () {
                    var canvas = this.canvasCroissance.nativeElement;
                    canvas.width = canvas.parentElement.clientWidth;
                    var context = canvas.getContext("2d");
                    this.imgWidth = 50 / 2;
                    this.imgHeight = 53 / 2;
                    this.nbArbresMax = 2000;
                    this.dispersion = 80;
                    this.arbres = [];
                    this.lastArbresNb = 0;
                    this._drawerService.init(context, canvas.width, canvas.height);
                    this.afficher();
                };
                CroissanceComponent.prototype.commencerForet = function (event) {
                    var i = 0;
                    this.insererArbre(new arbre_1.Arbre(event.offsetX, event.offsetY));
                };
                CroissanceComponent.prototype.faireCroitre = function () {
                    var nouveauxArbres = [];
                    for (var i = 0; i < this.arbres.length; i++) {
                        this.arbres[i].age++;
                        if (this.arbres[i].taille < this.arbres[i].tailleMax) {
                            this.arbres[i].taille += 0.03;
                        }
                        if (this.arbres[i].age - this.arbres[i].ageDernierePortee > this.arbres[i].intervalleFecondation
                            && this.arbres.length < this.nbArbresMax) {
                            var nbRejetons = Math.random();
                            for (var j = 0; j < nbRejetons; j++) {
                                var point = this._generator2DService.genererPoint2DGaussien(this.dispersion * this.dispersion, this.arbres[i].centreX, this.dispersion * this.dispersion, this.arbres[i].centreY);
                                nouveauxArbres.push(new arbre_1.Arbre(point.x, point.y));
                            }
                            this.arbres[i].ageDernierePortee = this.arbres[i].age;
                        }
                    }
                    for (var i = 0; i < nouveauxArbres.length; i++) {
                        this.insererArbre(nouveauxArbres[i]);
                    }
                };
                CroissanceComponent.prototype.insererArbre = function (arbre) {
                    var i = 0;
                    while (this.arbres.length < i && this.arbres[i].centreY > arbre.centreY) {
                        i++;
                    }
                    this.arbres.push(arbre);
                };
                CroissanceComponent.prototype.afficher = function () {
                    this._drawerService.reset();
                    if (this.lastArbresNb !== this.arbres.length) {
                        this.arbres.sort(function (a1, a2) {
                            if (a1.centreY < a2.centreY) {
                                return -1;
                            }
                            return 1;
                        });
                        this.lastArbresNb = this.arbres.length;
                    }
                    for (var i = 0; i < this.arbres.length; i++) {
                        this._drawerService.dessinerArbre(this.arbres[i].centreX, this.arbres[i].centreY, this.imgWidth * this.arbres[i].taille, this.imgHeight * this.arbres[i].taille, this.textureArbre);
                    }
                    var self = this;
                    window.requestAnimFrame(function () {
                        self.faireCroitre();
                        self.afficher();
                    });
                };
                __decorate([
                    core_2.ViewChild("canvasCroissance"), 
                    __metadata('design:type', Object)
                ], CroissanceComponent.prototype, "canvasCroissance", void 0);
                CroissanceComponent = __decorate([
                    core_1.Component({
                        selector: 'croissanceComponent',
                        templateUrl: 'app/croissance.component.html',
                        providers: [drawer_service_ts_1.DrawerService]
                    }), 
                    __metadata('design:paramtypes', [generator_service_ts_1.Generator2DService, math_service_ts_1.MathService, drawer_service_ts_1.DrawerService])
                ], CroissanceComponent);
                return CroissanceComponent;
            }());
            exports_1("CroissanceComponent", CroissanceComponent);
        }
    }
});
//# sourceMappingURL=croissance.component.js.map