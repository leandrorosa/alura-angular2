import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'botao',
    templateUrl: 'botao.component.html'
})
export class BotaoComponent {

    @Input() nome: string = 'Ok';
    @Input() estilo: string = 'btn-default';
    @Input() tipo: string = 'button';
    @Input() desabilitado: boolean = false;
    @Input() acao = new EventEmitter();
    @Input() confirmacao: boolean;


    executaAcao() {
        alert("opa");
        if(this.confirmacao) {
            if(confirm('Tem certeza?')) {
                this.acao.emit(null);
            }
            return;
        }
        this.acao.emit(null);
    }
}