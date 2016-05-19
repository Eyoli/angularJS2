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
    var DrawerService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DrawerService = (function () {
                function DrawerService() {
                }
                DrawerService.prototype.init = function (context, width, height) {
                    this._context = context;
                    this._width = width;
                    this._height = height;
                };
                DrawerService.prototype.dessinerForet = function (centers, params) {
                    for (var i = 0; i < centers.length; i++) {
                        var coefAgrandissement = Math.random() * (params.coefAgrandissementMax - params.coefAgrandissementMin) + params.coefAgrandissementMin;
                        var width = coefAgrandissement * params.textureWidth;
                        var height = coefAgrandissement * params.textureHeight;
                        this._context.drawImage(params.texture, centers[i].x - (width / 2), centers[i].y - (height / 2), width, height);
                    }
                };
                DrawerService.prototype.dessinerArbre = function (racineX, racineY, width, height, texture) {
                    this._context.drawImage(texture, racineX - (width / 2), racineY - height, width, height);
                };
                DrawerService.prototype.afficherEnveloppeConvexe = function (enveloppe) {
                    this._context.beginPath();
                    this._context.strokeStyle = '#003300';
                    this._context.moveTo(enveloppe[0].x, enveloppe[0].y);
                    for (var i = 1; i < enveloppe.length; i++) {
                        this._context.lineTo(enveloppe[i].x, enveloppe[i].y);
                        this._context.stroke();
                    }
                    this._context.lineTo(enveloppe[0].x, enveloppe[0].y);
                    this._context.stroke();
                    this._context.closePath();
                    this._context.beginPath();
                    this._context.strokeStyle = '#FF0000';
                    this._context.arc(enveloppe[0].x, enveloppe[0].y, 1, 0, 2 * Math.PI);
                    this._context.stroke();
                    this._context.closePath();
                };
                DrawerService.prototype.reset = function () {
                    this._context.clearRect(0, 0, this._width, this._height);
                };
                DrawerService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], DrawerService);
                return DrawerService;
            }());
            exports_1("DrawerService", DrawerService);
        }
    }
});
//# sourceMappingURL=drawer.service.js.map