export class JsonElement{
    constructor(
        public llave: string,
        public valor: string,
        public tipo: string
    ){}


    get form2JsonElement() {
        var valor = "";
        switch ( this.tipo ) {
            case "String":
                valor = this.valor.toString();
                break;
            case "Number":
                valor = Number( this.valor ).toString();
                break;
            case "Boolean":
                if ( this.valor.toLocaleLowerCase() == "true" ) {
                    valor = (true).toString();
                }
                else {
                    valor = (false).toString()
                }
                break;
            case "Json":
                try {
                    valor = JSON.parse( '\"{' + this.valor + '}\"' );
                }
                catch (e) {
                    console.log( 'invalid json' );
                }

                break;
            case "Array":
                valor = (("[" + this.toString() + "]").split( ',' )).toString();
                break;
        }
        var retorno=this.llave+":"+valor;
        return retorno;
    }
}