import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {JsonElement} from './jsonelement'
import {Injector} from "angular2/core";
import {DynamicComponentLoader} from "angular2/core";
import {ElementRef} from "angular2/core";
import {ComponentRef} from "angular2/core";
import {NgClass} from "angular2/common";


@Component(
    {
        selector:'jsonfieldgroup',
        templateUrl: 'app/jsonfieldgroup.html',
        directives: [NgClass],

    }
)

export class JsonFieldGroupComponent{
    types = ['Number','String','Boolean','Json','Array'];
    model = new JsonElement('type','text','String');
    idx: number = 0;
    in_json: number = 0;
    isOddOn:boolean = true;
    isPairOn: boolean = false;
    private _children:ComponentRef[] = [];

    constructor(private _dcl: DynamicComponentLoader, private _e: ElementRef, private _i: Injector) { }

    /*cambio a bloque hijo*/

    onChange(event:Event){
        this.model.tipo = event.valueOf().toString()
        //console.log(this.model.tipo)
        if (this.model.tipo=="Json"){
            console.log("Se ha seleccionado añadir nuevo JSON como valor")
            this._dcl.loadIntoLocation(JsonBroGroupComponent, this._e, 'jsonvalor' ).then((ref) => {
                ref.instance._ref = ref;
                ref.instance._idx = this.idx++;
                this.in_json = 1 ;
                this._children.push(ref);
                ref.instance._ref.instance.isOn =true;
                //console.log(this._children);
                //console.log(ref.instance );
            })
            console.log("Se define hijo JSON en este form, agregando clase css");
        }
        else if (this.in_json==1){
            this._children.forEach(cmp => cmp.dispose());
            this._children= [];
        }
    }

    ngOnInit():any {

    }
}

/*=============================================================*/
/*=============================================================*/
/*=============================================================*/

@Component({
    selector:'jsonbrogroup',
    templateUrl: 'app/jsonbrogroup.html',
    directives: [NgClass],

})

export class JsonBroGroupComponent{
    bro_idx: number=0;
    diagnostic: string="";
    private _bro: ComponentRef[] = [];

    constructor(private _dcl_bro : DynamicComponentLoader,  private _e_bro: ElementRef, private _i_bro: Injector) { }

    addBroJsonForm(){
        console.log("Agregando nuevo form JSON");
        this._dcl_bro.loadIntoLocation(JsonFieldGroupComponent, this._e_bro , 'jsonbrofields').then((ref) => {
            ref.instance._ref = ref;
            ref.instance._idx = this.bro_idx++;
            this._bro.push(ref);
            ref.instance.isOddOn= !this._bro[ref.instance._idx - 1].instance.isOddOn;
            ref.instance.isPairOn = !ref.instance.isOddOn;
        });
        //console.log(this._bro.length)
    }


    get buildJsonElement() {
        var l = this._bro.length
        var form2json=[];
        var retorno="";
        var i:number=0;
        for (i=0; i < l; i++){
            //console.log("Imprimiendo objecto "+i);
            //console.log(this._bro[i]);
           // console.log("Imprimiendo element Model JsonFieldGroupComponent ");
            //console.log(this._bro[i]['instance']['model']);
            var form = this._bro[i]['instance']['model'];
            //console.log(form);
            form2json.push(form.form2JsonElement);
            if (i<l-1)
                retorno += form2json[i]+", ";
            else
                retorno += form2json[i];
        }
        return "{"+retorno+"}";
    }

    get diagnostic_bro(){
        var l = this._bro.length;
        //console.log("Cantidad de elementos "+l);
        var jsonform = "["
        var i:number=0;
        for (i=0; i < l; i++){
            if (i<l-1){
                jsonform += JSON.stringify(this._bro[i]['instance']['model']) +", ";}
            else {
                jsonform +=JSON.stringify(this._bro[i]['instance']['model'])+"]";}
        }
        this.diagnostic = jsonform;
        return jsonform;
    }


    ngOnInit():any {
        this._dcl_bro.loadIntoLocation(JsonFieldGroupComponent, this._e_bro, 'jsonbrofields' ).then((ref) => {
            ref.instance._ref = ref;
            ref.instance._idx = this.bro_idx++;
            this._bro.push(ref);
            console.log(this._bro);
            console.log(ref.instance);
        });
        this.isOddOn = true;
        this.isPairOn = false;
    }

}
/*=============================================================*/
/*=============================================================*/
/*=============================================================*/

@Component({
    selector:'jsonelement-form',
    templateUrl: 'app/jsonelement-form.html',
})

export class JsonElementFormComponent{

    model = new JsonElement('type','text','String');

    JsonElements : JsonElement[];
    selectedJsonElement: JsonElement;
    idx: number = 0;
    private _children:ComponentRef[] = [];

    json_respuesta= "";
    jsonelement="";
   // grupo="";
    submitted = false;

    constructor(private _dcl: DynamicComponentLoader, private _e: ElementRef, private _i: Injector) {
        //_dcl.loadAsRoot(JsonFieldGroupComponent,'#jsonelement',_i);
       //_dcl.loadIntoLocation(JsonFieldGroupComponent,"jsonelement" , _e);
    }

//  constructor( private _dcl: DynamicComponentLoader, private  _i: Injector) {
//   _dcl.loadAsRoot(ChildComponent,'#jsonelementform',_i);
//_dcl.loadIntoLocation( ChildComponent, _e, 'jsonelementform' );
// _dcl.loadIntoLocation(JsonFieldGroupComponent, _e, 'jsonelementform');
//}

    get diagnostic(){
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
            jsonform = this._children[0].instance.diagnostic_bro;//this._children[0]['instance'].diagnostic

        }
        catch(err) {
            //console.log("Grupo general no hay aun");
            console.log(this._children[0])
        }
        //console.log("Elementos "+l);
        //console.log(this._children);
        return jsonform;
    }


    onSubmitJsonElement() {
        this.submitted=true;
        this.json_respuesta=this._children[0]['instance'].buildJsonElement;
        //console.log(this._children);
        //console.log("Imprimiendo json respuesta");
        //console.log(this.json_respuesta);
        //console.log("Imprimiendo instancia");
        //console.log(this._children);
    }


    ngOnInit():any{
        this._dcl.loadIntoLocation(JsonBroGroupComponent, this._e, 'jsonfields' ).then((ref) => {
            ref.instance._ref = ref;
            ref.instance._idx = this.idx++;
            this._children.push(ref);
            //console.log("Se inicia from");
            //console.log(this._children);
            //console.log(ref.instance);
        });
    }

}