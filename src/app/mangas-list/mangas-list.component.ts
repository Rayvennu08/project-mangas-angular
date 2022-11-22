import { Component, OnInit } from '@angular/core';
import { mangaCartService } from '../mangas-cart.service';
import { mangaDataService } from '../mangas-data.service';
import { manga } from './manga';

@Component({
  selector: 'app-mangas-list',
  templateUrl: './mangas-list.component.html',
  styleUrls: ['./mangas-list.component.scss']
})
export class mangaListComponent implements OnInit {

  mangas: manga[] = [];


  /*
  Se crea una variable private con la instancia del servicio, si ya existe no se instancia nuevamente,
  por lo que funciona como "singleton" entre los componentes.
  */
  constructor(private cart: mangaCartService, private mangaDataService: mangaDataService) { }


  //ngOnInit se dispara cuando carga la pantalla
  ngOnInit(): void {
    this.mangaDataService.getAll().subscribe(manga => {
      this.mangas = manga;
    })
  }


  addToCart(mangas: manga) {
    if (mangas.quantity > 0) {
      //Llamado a funcion addToCart de la instancia cart con el manga como parametro.
      this.cart.addToCart(mangas);

      //Luego de dicho llamado se le resta al stock la cantidad comprada.
      mangas.stock -= mangas.quantity;
      mangas.quantity = 0;  //Se pasa a 0 para la proxima compra
    }

  }
}
