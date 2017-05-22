/**
 * Created by leand on 10/05/2017.
 */

import {Component} from "@angular/core";
import {FotoComponent} from "../foto/foto.component";
import {Headers, Http} from "@angular/http";

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: 'cadastro.component.html'
})
export class CadastroComponent {

    foto:FotoComponent = new FotoComponent();

    private http: Http;

    constructor(http:Http) {
        this.http = http;

    }

    cadastrar(event:Event) {
        event.preventDefault();

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post('v1/fotos', JSON.stringify(this.foto), {headers: headers})
            .subscribe(() => {
                this.foto = new FotoComponent();
                console.log("Foto salva com sucesso");
            }, error => console.log(error));
    }
}
