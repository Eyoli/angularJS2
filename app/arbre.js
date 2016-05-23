System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Arbre;
    return {
        setters:[],
        execute: function() {
            Arbre = (function () {
                function Arbre(centreX, centreY, modele) {
                    this.centreX = centreX;
                    this.centreY = centreY;
                    this.modele = modele;
                    this.age = 0;
                    this.ageMax = 300 + 100 * Math.random();
                    this.taille = 0.25;
                    this.tailleMax = 0.75 + Math.random() * 1.5;
                    this.ageDernierePortee = 0;
                    this.intervalleFecondation = 90 + 100 * Math.random();
                }
                return Arbre;
            }());
            exports_1("Arbre", Arbre);
        }
    }
});
//# sourceMappingURL=arbre.js.map