import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { manga } from './mangas-list/manga';

@Injectable({
  providedIn: 'root'
})
export class mangaCartService {

  //Declaracion de variable observada en private
  private _cartList: manga[] = [];
  //Se crea un BehaviorSubject (objeto observable) que, basicamente, notificara cada vez que este cambie.
  cartList: BehaviorSubject<manga[]> = new BehaviorSubject(this._cartList);


  constructor() { }


  addToCart(manga: manga) {
    //Se busca en el arreglo un objeto con el mismo 'name'; si existe, se retorna a la variable item
    let item: manga = this._cartList.find((v1) => v1.name == manga.name)!;

    //Si el item no existe en el array,
    if(!item) {
      //se agrega al arreglo una copia del objeto, no su instancia.
      this._cartList.push({...manga});
    } else {
      //Cada vez que se llame esta funcion al comprar, le suma al quantity del item que solicito el usuario
      item.quantity += manga.quantity;
    }

    //Indica al BehaviorSubject que notifique un cambio en la variable privada _cartList,
    //ya que con la funcion addToCart cambia ||equivale a eventEmitter||
    this.cartList.next(this._cartList);
  }
}
