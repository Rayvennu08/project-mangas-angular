import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { manga } from '../mangas-list/manga';

@Component({
  selector: 'app-input-quantity',
  templateUrl: './input-quantity.component.html',
  styleUrls: ['./input-quantity.component.scss']
})
export class InputQuantityComponent implements OnInit {

  constructor() { }

  //con el @Input() recibe un valor de entrada desde el HTML, en este caso, [instrument]="instrument" que viene del *ngFor
  @Input() quantity!: number;

  @Input() max!: number;

  //definimos nuestro propio evento con el eventemitter (cambia el valor de quantity ya que es quantityChange)
  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();



  ngOnInit(): void {
  }


  upQuantity(): void {
    if (this.quantity < this.max) {
      this.quantity++;

      //avisamos cuando se tiene que firear el evento(cada vez que se cambia el valor de quantity se emite el evento):
      this.quantityChange.emit(this.quantity);
    }
  }

  downQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;

      this.quantityChange.emit(this.quantity);
    }
  }

  onChangeQuantity(event: any): void {
    //se chequea si el valor ingresado es mayor al stock actual o menor a 0
    if (this.quantity > this.max) {
      this.quantity = this.max;
    } else if (this.quantity < 0) {
      this.quantity = 0;
    }

    this.quantityChange.emit(this.quantity);
  }

  checkInputKeywords(event: any): void {
    let keywords = ["e", "E", "-", "+"];

    //si se ingresa un caracter que este en el arreglo 'keywords', se previene el default, provocando que la letra no se escriba en el input
    if (keywords.includes(event.key)) {
      event.preventDefault()
    }
  }
}
