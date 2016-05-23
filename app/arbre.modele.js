System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ArbreModele;
    return {
        setters:[],
        execute: function() {
            ArbreModele = (function () {
                function ArbreModele(nom, tailleMax, ageMax, intervalleFecondation, textureSrc, width, height) {
                    this.nom = nom;
                    this.tailleMax = tailleMax;
                    this.ageMax = ageMax;
                    this.intervalleFecondation = intervalleFecondation;
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