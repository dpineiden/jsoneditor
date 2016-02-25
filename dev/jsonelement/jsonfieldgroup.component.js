System.register(['angular2/core', './jsonelement', "angular2/core", "./jsonelement-form.component", "angular2/common"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, jsonelement_1, core_2, core_3, core_4, jsonelement_form_component_1, common_1;
    var JsonFieldGroupComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (jsonelement_1_1) {
                jsonelement_1 = jsonelement_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
                core_3 = core_2_1;
                core_4 = core_2_1;
            },
            function (jsonelement_form_component_1_1) {
                jsonelement_form_component_1 = jsonelement_form_component_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            JsonFieldGroupComponent = (function () {
                function JsonFieldGroupComponent(_dcl, _e, _i) {
                    this._dcl = _dcl;
                    this._e = _e;
                    this._i = _i;
                    this.types = ['Number', 'String', 'Boolean', 'Json', 'Array'];
                    this.model = new jsonelement_1.JsonElement('type', 'text', 'String');
                    this.idx = 0;
                    this.in_json = 0;
                    this.isOn = false;
                    this.isDisabled = false;
                    this._children = [];
                }
                JsonFieldGroupComponent.prototype.onChange = function (event) {
                    var _this = this;
                    this.model.tipo = event.valueOf().toString();
                    console.log(this.model.tipo);
                    if (this.model.tipo == "Json") {
                        console.log("Se ha seleccionado añadir nuevo JSON como valor");
                        this._dcl.loadIntoLocation(jsonelement_form_component_1.JsonBroGroupComponent, this._e, 'jsonvalor').then(function (ref) {
                            ref.instance._ref = ref;
                            ref.instance._idx = _this.idx++;
                            _this.isOn = true;
                            _this.in_json = 1;
                            _this._children.push(ref);
                            console.log(_this._children);
                            console.log(ref.instance);
                        });
                    }
                    else if (this.in_json == 1) {
                        this._children.forEach(function (cmp) { return cmp.dispose(); });
                        this._children = [];
                    }
                };
                JsonFieldGroupComponent.prototype.ngOnInit = function () {
                };
                JsonFieldGroupComponent = __decorate([
                    core_1.Component({
                        inputs: ['isChild'],
                        selector: 'jsonfieldgroup',
                        templateUrl: 'app/jsonfieldgroup.html',
                        directives: [common_1.NgClass]
                    }), 
                    __metadata('design:paramtypes', [core_3.DynamicComponentLoader, core_4.ElementRef, core_2.Injector])
                ], JsonFieldGroupComponent);
                return JsonFieldGroupComponent;
            })();
            exports_1("JsonFieldGroupComponent", JsonFieldGroupComponent);
        }
    }
});
//# sourceMappingURL=jsonfieldgroup.component.js.map