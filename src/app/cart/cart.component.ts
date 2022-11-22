import { Component, OnInit } from '@angular/core';
import { mangaCartService } from '../mangas-cart.service';
import { manga } from '../mangas-list/manga';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList: manga[] = [];

  constructor(private cart: mangaCartService) {
    //Cada vez que el observable cambia, el cartList de CartComponent(esta clase) toma su valor.
    cart.cartList.subscribe(observable => {
      this.cartList = observable;
    });
  }

  ngOnInit(): void {
  }


  getTotalPrice(): number{
    let totalPrice = 0;

    if (this.cartList.length > 0) {
      for (const manga of this.cartList) {
        totalPrice += (manga.price * manga.quantity);
      }
    }

    return totalPrice;
  }
}
