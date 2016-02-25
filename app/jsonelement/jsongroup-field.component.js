System.register(["angular2/core", "./jsonelement"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, jsonelement_1;
    var JsonGroupFieldsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (jsonelement_1_1) {
                jsonelement_1 = jsonelement_1_1;
            }],
        execute: function() {
            JsonGroupFieldsComponent = (function () {
                function JsonGroupFieldsComponent() {
                    this.types = ['Number', 'String', 'Boolean', 'Json', 'Array'];
                    this.model = new jsonelement_1.JsonElement('type', 'text', 'string');
                }
                JsonGroupFieldsComponent = __decorate([
                    core_1.Component({
                        selector: 'jsongroupfield',
                        templateUrl: 'app/jsongroupfield.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], JsonGroupFieldsComponent);
                return JsonGroupFieldsComponent;
            })();
            exports_1("JsonGroupFieldsComponent", JsonGroupFieldsComponent);
        }
    }
});
//# sourceMappingURL=jsongroup-field.component.js.map