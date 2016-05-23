System.register(['angular2/core', './arbre.modele'], function(exports_1, context_1) {
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
    var core_1, arbre_modele_1;
    var DataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (arbre_modele_1_1) {
                arbre_modele_1 = arbre_modele_1_1;
            }],
        execute: function() {
            DataService = (function () {
                function DataService() {
                    this.arbresModeles = [];
                    this.arbresModeles.push(new arbre_modele_1.ArbreModele("Modèle 1", 0.25, 2, 100, 200, 400, 'app/arbre1.png', 50 / 2, 53 / 2));
                    this.arbresModeles.push(new arbre_modele_1.ArbreModele("Modèle 2", 0.25, 2, 100, 200, 400, 'app/arbre2.png', 25, 25));
                    this.arbresModeles.push(new arbre_modele_1.ArbreModele("Modèle 3", 0.25, 2, 100, 200, 400, 'app/arbre3.png', 25, 25));
                }
                DataService.prototype.getModeles = function () {
                    return Promise.resolve(this.arbresModeles);
                };
                DataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], DataService);
                return DataService;
            }());
            exports_1("DataService", DataService);
        }
    }
});
//# sourceMappingURL=data.service.js.map