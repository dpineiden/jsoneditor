System.register([], function(exports_1) {
    var JsonElement;
    return {
        setters:[],
        execute: function() {
            JsonElement = (function () {
                function JsonElement(llave, valor, tipo) {
                    this.llave = llave;
                    this.valor = valor;
                    this.tipo = tipo;
                }
                Object.defineProperty(JsonElement.prototype, "form2JsonElement", {
                    get: function () {
                        var valor = "";
                        switch (this.tipo) {
                            case "String":
                                valor = this.valor.toString();
                                break;
                            case "Number":
                                valor = Number(this.valor).toString();
                                break;
                            case "Boolean":
                                if (this.valor.toLocaleLowerCase() == "true") {
                                    valor = (true).toString();
                                }
                                else {
                                    valor = (false).toString();
                                }
                                break;
                            case "Json":
                                try {
                                    valor = JSON.parse('\"{' + this.valor + '}\"');
                                }
                                catch (e) {
                                    console.log('invalid json');
                                }
                                break;
                            case "Array":
                                valor = (("[" + this.toString() + "]").split(',')).toString();
                                break;
                        }
                        var retorno = this.llave + ":" + valor;
                        return retorno;
                    },
                    enumerable: true,
                    configurable: true
                });
                return JsonElement;
            })();
            exports_1("JsonElement", JsonElement);
        }
    }
});
//# sourceMappingURL=jsonelement.js.map