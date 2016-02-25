System.register(['angular2/core', "./jsonelement/jsonelement-form.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, jsonelement_form_component_1;
    var JsonElementComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (jsonelement_form_component_1_1) {
                jsonelement_form_component_1 = jsonelement_form_component_1_1;
            }],
        execute: function() {
            JsonElementComponent = (function () {
                function JsonElementComponent() {
                }
                JsonElementComponent = __decorate([
                    core_1.Component({
                        selector: 'json-editor',
                        template: "<div class=\"container\">\n            <h1>Json Editor to TextArea</h1>\n                <textarea rows=\"10\" cols=\"90\">\n                {{jsonform.diagnostic}} - {{jsonform.json_respuesta}}\n                </textarea>\n                <jsonelement-form #jsonform></jsonelement-form>\n        </div>\n            ",
                        directives: [jsonelement_form_component_1.JsonElementFormComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], JsonElementComponent);
                return JsonElementComponent;
            })();
            exports_1("JsonElementComponent", JsonElementComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map