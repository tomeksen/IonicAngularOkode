import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(filtro: any[], texto?: string): any {
    if(texto===''){
      return filtro
    }
    //filtro en la lista para que solo me encuentre los titulos de las obras que quiera
    return filtro.filter(item=>{
      return item.title.toLowerCase().includes(texto.toLowerCase())
    });
  }

}
