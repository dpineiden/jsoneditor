import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {JsonElement} from './jsonelement'
import {Injector} from "angular2/core";
import {DynamicComponentLoader} from "angular2/core";
import {ElementRef} from "angular2/core";
import {ComponentRef} from "angular2/core";
import {JsonBroGroupComponent} from "./jsonelement-form.component";
import {NgClass} from "angular2/common";


@Component(
    {
        inputs: ['isChild'],
        selector:'jsonfieldgroup',
        templateUrl: 'app/jsonfieldgroup.html',
        directives:[NgClass]
    }
)

export class JsonFieldGroupComponent{
    types = ['Number','String','Boolean','Json','Array'];
    model = new JsonElement('type','text','String');
    idx: number = 0;
    in_json: number = 0;

    isOn = false;
    isDisabled = false;

    private _children:ComponentRef[] = [];

    constructor(private _dcl: DynamicComponentLoader, private _e: ElementRef, private _i: Injector) { }

    onChange(event:Event){
        this.model.tipo = event.valueOf().toString()
        console.log(this.model.tipo)
        if (this.model.tipo=="Json"){
            console.log("Se ha seleccionado añadir nuevo JSON como valor")
            this._dcl.loadIntoLocation(JsonBroGroupComponent, this._e, 'jsonvalor' ).then((ref) => {
                ref.instance._ref = ref;
                ref.instance._idx = this.idx++;
                this.isOn= true;
                this.in_json = 1 ;
                this._children.push(ref);
                console.log(this._children);
                console.log(ref.instance );
            })

        }
        else if (this.in_json==1){
            this._children.forEach(cmp => cmp.dispose());
            this._children= [];
        }
    }

    ngOnInit():any {

    }
}