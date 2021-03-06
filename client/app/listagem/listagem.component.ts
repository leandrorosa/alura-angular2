import { FotoService } from './../foto/foto.service';
import { FotoComponent } from './../foto/foto.component';
import {Component} from "@angular/core";
import {Http} from "@angular/http";


@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: 'listagem.component.html'
})
export class ListagemComponent {

    fotos: FotoComponent[] = [];
    service: FotoService;
    mensagem: string = "";

    constructor(service: FotoService) {
        this.service = service;
        this.service.lista()
            .subscribe(
                fotos => this.fotos = fotos,
                erro => console.log(erro)
            )
    }

    remove(foto):void {
        console.log(foto);
        this.service.remove(foto)
            .subscribe(
                fotos => {
                    let novasFotos = this.fotos.slice(0);
                    let indice = novasFotos.indexOf(foto);
                    novasFotos.splice(indice, 1);
                    this.fotos = novasFotos;
                    this.mensagem = "Foto excluida com sucesso";
                },
                error => { 
                    console.log(error)
                    this.mensagem = "Não foi possível remover a foto";
                }
            );
    }
        

}