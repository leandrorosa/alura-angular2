import { FotoService } from './../foto/foto.service';
/**
 * Created by leand on 10/05/2017.
 */

import {Component} from "@angular/core";
import {FotoComponent} from "../foto/foto.component";
import {Headers, Http} from "@angular/http";
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: 'cadastro.component.html'
})
export class CadastroComponent {

    foto:FotoComponent = new FotoComponent();

    meuForm: FormGroup;

    private service: FotoService;

    route: ActivatedRoute;

    router: Router;

    mensagem: string;

    constructor(service:FotoService, fb: FormBuilder, route: ActivatedRoute, router: Router) {
        this.service = service;
        this.route = route;
        this.router = router;

        this.route.params.subscribe(params => {
            let id = params['id'];
            if(id) {
                this.service.buscaPorId(id)
                    .subscribe(
                        foto => this.foto = foto,
                        error => console.log(error)
                    )
            }
            console.log(params['id'])
        })

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
            .subscribe(res => {
                this.mensagem = res.mensagem;
                this.foto = new FotoComponent();
                console.log("Foto salva com sucesso");
                if(!res.inclusao) this.router.navigate(['']);
            }, error => console.log(error));
    }
}
