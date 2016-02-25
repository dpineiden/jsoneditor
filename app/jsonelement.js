System.register([], function(exports_1) {
    var JsonElement;
    return {
        setters:[],
        execute: function() {
            JsonElement = (function () {
                function JsonElement(llave, valor, tipo, hijo) {
                    this.llave = llave;
                    this.valor = valor;
                    this.tipo = tipo;
                    this.hijo = hijo;
                }
                return JsonElement;
            })();
            exports_1("JsonElement", JsonElement);
            2;
        }
    }
});
//# sourceMappingURL=jsonelement.js.map