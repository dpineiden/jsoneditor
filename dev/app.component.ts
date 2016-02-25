import {Component} from 'angular2/core';
import {JsonElementFormComponent} from "./jsonelement/jsonelement-form.component";

@Component({
    selector: 'json-editor',
    template: `<div class="container">
            <h1>Json Editor to TextArea</h1>
                <textarea rows="10" cols="90">
                {{jsonform.diagnostic}} - {{jsonform.json_respuesta}}
                </textarea>
                <jsonelement-form #jsonform></jsonelement-form>
        </div>
            `,
    directives: [JsonElementFormComponent]
})

export class JsonElementComponent {}