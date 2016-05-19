System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Options;
    return {
        setters:[],
        execute: function() {
            Options = (function () {
                function Options(nb, ecartTypeX, ecartTypeY, coefAgrandissementMin, coefAgrandissementMax) {
                    this.nb = nb;
                    this.ecartTypeX = ecartTypeX;
                    this.ecartTypeY = ecartTypeY;
                    this.coefAgrandissementMin = coefAgrandissementMin;
                    this.coefAgrandissementMax = coefAgrandissementMax;
                }
                return Options;
            }());
            exports_1("Options", Options);
        }
    }
});
//# sourceMappingURL=options.js.map