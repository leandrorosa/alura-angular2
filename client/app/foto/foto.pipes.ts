import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
    name: 'filtroPorTitulo'
}) 
export class FiltroPorTitulo implements PipeTransform {
    
    transform(fotos: any, digitado) {
        console.log(fotos);
        console.log(digitado);        
    }

}