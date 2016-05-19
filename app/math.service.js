System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var MathService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MathService = (function () {
                function MathService() {
                }
                MathService.prototype.produitVectoriel = function (p1, p2, p3) {
                    return (p2.x - p1.x) * (p3.y - p1.y) - (p2.y - p1.y) * (p3.x - p1.x);
                };
                MathService.prototype.calculerEnveloppeConvexe = function (points) {
                    var indiceOrdonneeMin = 0;
                    // Détermination du point d'ordonnée minimale P (O(N))
                    for (var i = 0; i < points.length; i++) {
                        if (points[indiceOrdonneeMin].y > points[i].y) {
                            indiceOrdonneeMin = i;
                        }
                        else if (points[indiceOrdonneeMin].y === points[i].y && points[indiceOrdonneeMin].x > points[i].x) {
                            indiceOrdonneeMin = i;
                        }
                    }
                    var P = points[indiceOrdonneeMin];
                    points.splice(indiceOrdonneeMin, 1);
                    // Tri suivant l'angle entre chaque point et P (O(Nlog(N)))
                    points.sort(function (p1, p2) {
                        var d1 = Math.sqrt((p1.x - P.x) * (p1.x - P.x) + (p1.y - P.y) * (p1.y - P.y));
                        var d2 = Math.sqrt((p2.x - P.x) * (p2.x - P.x) + (p2.y - P.y) * (p2.y - P.y));
                        var cos1 = (p1.x - P.x) / d1;
                        var cos2 = (p2.x - P.x) / d2;
                        if (cos1 > cos2) {
                            return 1;
                        }
                        else {
                            return -1;
                        }
                    });
                    points.unshift(P);
                    var enveloppe = [];
                    for (var i = 0; i < points.length; i++) {
                        enveloppe.push(points[i]);
                        enveloppe[i].num = i + 1;
                    }
                    // Détermination de l'enveloppe convexe
                    var j = 0;
                    while (j < enveloppe.length - 2) {
                        var p1 = enveloppe[j];
                        var p2 = enveloppe[j + 1];
                        var p3 = enveloppe[j + 2];
                        var pv = this.produitVectoriel(p1, p2, p3);
                        if (pv > 0) {
                            enveloppe.splice(j + 1, 1);
                            j--;
                        }
                        else {
                            j++;
                        }
                    }
                    return Promise.resolve(enveloppe);
                };
                MathService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], MathService);
                return MathService;
            }());
            exports_1("MathService", MathService);
        }
    }
});
//# sourceMappingURL=math.service.js.map