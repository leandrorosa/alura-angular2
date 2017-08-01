import { FotoService } from './../foto/foto.service';
/**
 * Created by leand on 10/05/2017.
 */

import {Component} from "@angular/core";
import {FotoComponent} from "../foto/foto.component";
import {Headers, Http} from "@angular/http";
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: 'cadastro.component.html'
})
export class CadastroComponent {

    foto:FotoComponent = new FotoComponent();

    meuForm: FormGroup;

    private service: FotoService;

    constructor(service:FotoService, fb: FormBuilder) {
        this.service = service;

        this.meuForm = fb.group({
            titulo: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            url: ['', Validators.required],
            descricao: ['']
        });

    }

    cadastrar(event:Event) {
        event.preventDefault();

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.service.cadastra(this.foto)
            .subscribe(() => {
                this.foto = new FotoComponent();
                console.log("Foto salva com sucesso");
            }, error => console.log(error));
    }
}
