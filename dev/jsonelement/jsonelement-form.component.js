System.register(['angular2/core', './jsonelement', "angular2/core", "angular2/common"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, jsonelement_1, core_2, core_3, core_4, common_1;
    var JsonFieldGroupComponent, JsonBroGroupComponent, JsonElementFormComponent;
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
                    this.isOddOn = true;
                    this.isPairOn = false;
                    this._children = [];
                }
                /*cambio a bloque hijo*/
                JsonFieldGroupComponent.prototype.onChange = function (event) {
                    var _this = this;
                    this.model.tipo = event.valueOf().toString();
                    //console.log(this.model.tipo)
                    if (this.model.tipo == "Json") {
                        console.log("Se ha seleccionado añadir nuevo JSON como valor");
                        this._dcl.loadIntoLocation(JsonBroGroupComponent, this._e, 'jsonvalor').then(function (ref) {
                            ref.instance._ref = ref;
                            ref.instance._idx = _this.idx++;
                            _this.in_json = 1;
                            _this._children.push(ref);
                            ref.instance._ref.instance.isOn = true;
                            //console.log(this._children);
                            //console.log(ref.instance );
                        });
                        console.log("Se define hijo JSON en este form, agregando clase css");
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
                        selector: 'jsonfieldgroup',
                        templateUrl: 'app/jsonfieldgroup.html',
                        directives: [common_1.NgClass],
                    }), 
                    __metadata('design:paramtypes', [core_3.DynamicComponentLoader, core_4.ElementRef, core_2.Injector])
                ], JsonFieldGroupComponent);
                return JsonFieldGroupComponent;
            })();
            exports_1("JsonFieldGroupComponent", JsonFieldGroupComponent);
            /*=============================================================*/
            /*=============================================================*/
            /*=============================================================*/
            JsonBroGroupComponent = (function () {
                function JsonBroGroupComponent(_dcl_bro, _e_bro, _i_bro) {
                    this._dcl_bro = _dcl_bro;
                    this._e_bro = _e_bro;
                    this._i_bro = _i_bro;
                    this.bro_idx = 0;
                    this.diagnostic = "";
                    this._bro = [];
                }
                JsonBroGroupComponent.prototype.addBroJsonForm = function () {
                    var _this = this;
                    console.log("Agregando nuevo form JSON");
                    this._dcl_bro.loadIntoLocation(JsonFieldGroupComponent, this._e_bro, 'jsonbrofields').then(function (ref) {
                        ref.instance._ref = ref;
                        ref.instance._idx = _this.bro_idx++;
                        _this._bro.push(ref);
                        ref.instance.isOddOn = !_this._bro[ref.instance._idx - 1].instance.isOddOn;
                        ref.instance.isPairOn = !ref.instance.isOddOn;
                    });
                    //console.log(this._bro.length)
                };
                Object.defineProperty(JsonBroGroupComponent.prototype, "buildJsonElement", {
                    get: function () {
                        var l = this._bro.length;
                        var form2json = [];
                        var retorno = "";
                        var i = 0;
                        for (i = 0; i < l; i++) {
                            //console.log("Imprimiendo objecto "+i);
                            //console.log(this._bro[i]);
                            // console.log("Imprimiendo element Model JsonFieldGroupComponent ");
                            //console.log(this._bro[i]['instance']['model']);
                            var form = this._bro[i]['instance']['model'];
                            //console.log(form);
                            form2json.push(form.form2JsonElement);
                            if (i < l - 1)
                                retorno += form2json[i] + ", ";
                            else
                                retorno += form2json[i];
                        }
                        return "{" + retorno + "}";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(JsonBroGroupComponent.prototype, "diagnostic_bro", {
                    get: function () {
                        var l = this._bro.length;
                        //console.log("Cantidad de elementos "+l);
                        var jsonform = "[";
                        var i = 0;
                        for (i = 0; i < l; i++) {
                            if (i < l - 1) {
                                jsonform += JSON.stringify(this._bro[i]['instance']['model']) + ", ";
                            }
                            else {
                                jsonform += JSON.stringify(this._bro[i]['instance']['model']) + "]";
                            }
                        }
                        this.diagnostic = jsonform;
                        return jsonform;
                    },
                    enumerable: true,
                    configurable: true
                });
                JsonBroGroupComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._dcl_bro.loadIntoLocation(JsonFieldGroupComponent, this._e_bro, 'jsonbrofields').then(function (ref) {
                        ref.instance._ref = ref;
                        ref.instance._idx = _this.bro_idx++;
                        _this._bro.push(ref);
                        console.log(_this._bro);
                        console.log(ref.instance);
                    });
                    this.isOddOn = true;
                    this.isPairOn = false;
                };
                JsonBroGroupComponent = __decorate([
                    core_1.Component({
                        selector: 'jsonbrogroup',
                        templateUrl: 'app/jsonbrogroup.html',
                        directives: [common_1.NgClass],
                    }), 
                    __metadata('design:paramtypes', [core_3.DynamicComponentLoader, core_4.ElementRef, core_2.Injector])
                ], JsonBroGroupComponent);
                return JsonBroGroupComponent;
            })();
            exports_1("JsonBroGroupComponent", JsonBroGroupComponent);
            /*=============================================================*/
            /*=============================================================*/
            /*=============================================================*/
            JsonElementFormComponent = (function () {
                function JsonElementFormComponent(_dcl, _e, _i) {
                    this._dcl = _dcl;
                    this._e = _e;
                    this._i = _i;
                    this.model = new jsonelement_1.JsonElement('type', 'text', 'String');
                    this.idx = 0;
                    this._children = [];
                    this.json_respuesta = "";
                    this.jsonelement = "";
                    // grupo="";
                    this.submitted = false;
                    //_dcl.loadAsRoot(JsonFieldGroupComponent,'#jsonelement',_i);
                    //_dcl.loadIntoLocation(JsonFieldGroupComponent,"jsonelement" , _e);
                }
                Object.defineProperty(JsonElementFormComponent.prototype, "diagnostic", {
                    //  constructor( private _dcl: DynamicComponentLoader, private  _i: Injector) {
                    //   _dcl.loadAsRoot(ChildComponent,'#jsonelementform',_i);
                    //_dcl.loadIntoLocation( ChildComponent, _e, 'jsonelementform' );
                    // _dcl.loadIntoLocation(JsonFieldGroupComponent, _e, 'jsonelementform');
                    //}
                    get: function () {
                        var l;
                        //console.log("Grupo general:");
                        var jsonform;
                        try {
                            l = this._children[0].instance._bro.length;
                            //console.log("Grupo general hermanos ");
                            //console.log(this._children[0].instance)
                            ///console.log(this._children[0].instance.diagnostic_bro)
                            //console.log("Grupo general primera seleccion ");
                            //console.log(this._children[0].instance._bro[0].diagnostic_bro)
                            jsonform = this._children[0].instance.diagnostic_bro; //this._children[0]['instance'].diagnostic
                        }
                        catch (err) {
                            //console.log("Grupo general no hay aun");
                            console.log(this._children[0]);
                        }
                        //console.log("Elementos "+l);
                        //console.log(this._children);
                        return jsonform;
                    },
                    enumerable: true,
                    configurable: true
                });
                JsonElementFormComponent.prototype.onSubmitJsonElement = function () {
                    this.submitted = true;
                    this.json_respuesta = this._children[0]['instance'].buildJsonElement;
                    //console.log(this._children);
                    //console.log("Imprimiendo json respuesta");
                    //console.log(this.json_respuesta);
                    //console.log("Imprimiendo instancia");
                    //console.log(this._children);
                };
                JsonElementFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._dcl.loadIntoLocation(JsonBroGroupComponent, this._e, 'jsonfields').then(function (ref) {
                        ref.instance._ref = ref;
                        ref.instance._idx = _this.idx++;
                        _this._children.push(ref);
                        //console.log("Se inicia from");
                        //console.log(this._children);
                        //console.log(ref.instance);
                    });
                };
                JsonElementFormComponent = __decorate([
                    core_1.Component({
                        selector: 'jsonelement-form',
                        templateUrl: 'app/jsonelement-form.html',
                    }), 
                    __metadata('design:paramtypes', [core_3.DynamicComponentLoader, core_4.ElementRef, core_2.Injector])
                ], JsonElementFormComponent);
                return JsonElementFormComponent;
            })();
            exports_1("JsonElementFormComponent", JsonElementFormComponent);
        }
    }
});
//# sourceMappingURL=jsonelement-form.component.js.map