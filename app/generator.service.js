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
    var Generator2DService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Generator2DService = (function () {
                function Generator2DService() {
                }
                Generator2DService.prototype.genererPoint2DGaussien = function (Vx, Mx, Vy, My) {
                    var w = 0;
                    var x = 0;
                    var y = 0;
                    var ecartTypeX = Math.sqrt(Vx);
                    var ecartTypeY = Math.sqrt(Vy);
                    do {
                        var v1 = 2 * Math.random() - 1;
                        var v2 = 2 * Math.random() - 1;
                        var w = v1 * v1 + v2 * v2;
                    } while (w >= 1);
                    var coef = Math.sqrt(-2 * (Math.log(w) / w));
                    x = ecartTypeX * (v1 * coef) + Mx;
                    y = ecartTypeY * (v2 * coef) + My;
                    return { x: x, y: y };
                };
                Generator2DService.prototype.comp = function (p1, p2) {
                    if (p1.y < p2.y) {
                        return -1;
                    }
                    return 1;
                };
                Generator2DService.prototype.genererForet = function (params) {
                    var points = [];
                    var nodes = [];
                    for (var i = 0; i < params.nb; i++) {
                        var point = this.genererPoint2DGaussien(params.vx, params.mx, params.vy, params.my);
                        points.push(point);
                        nodes.push({ x: point.x - (params.textureWidth / 2), y: point.y - (params.textureHeight / 2) });
                        nodes.push({ x: point.x + (params.textureWidth / 2), y: point.y - (params.textureHeight / 2) });
                        nodes.push({ x: point.x - (params.textureWidth / 2), y: point.y + (params.textureHeight / 2) });
                        nodes.push({ x: point.x + (params.textureWidth / 2), y: point.y + (params.textureHeight / 2) });
                    }
                    points.sort(this.comp);
                    return Promise.resolve({ centers: points, nodes: nodes });
                };
                Generator2DService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], Generator2DService);
                return Generator2DService;
            }());
            exports_1("Generator2DService", Generator2DService);
        }
    }
});
//# sourceMappingURL=generator.service.js.map