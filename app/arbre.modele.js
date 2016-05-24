System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ArbreModele;
    return {
        setters:[],
        execute: function() {
            ArbreModele = (function () {
                function ArbreModele(nom, tailleMin, tailleMax, intervalleReproductionMin, intervalleReproductionMax, ageMax, textureSrc, width, height) {
                    this.nom = nom;
                    this.tailleMin = tailleMin;
                    this.tailleMax = tailleMax;
                    this.intervalleReproductionMin = intervalleReproductionMin;
                    this.intervalleReproductionMax = intervalleReproductionMax;
                    this.ageMax = ageMax;
                    this.width = width;
                    this.height = height;
                    this.texture = new Image();
                    this.texture.src = textureSrc;
                }
                return ArbreModele;
            }());
            exports_1("ArbreModele", ArbreModele);
        }
    }
});
//# sourceMappingURL=arbre.modele.js.map