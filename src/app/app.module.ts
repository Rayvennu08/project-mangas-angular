import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { mangaListComponent } from './mangas-list/mangas-list.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { mangaAboutComponent } from './mangas-about/mangas-about.component';
import { mangasVolsComponent } from './mangas-volumes/mangas-volumes.component';
import { InputQuantityComponent } from './input-quantity/input-quantity.component';

@NgModule({
  declarations: [
    AppComponent,
    mangaListComponent,
    CartComponent,
    mangaAboutComponent,
    mangasVolsComponent,
    InputQuantityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
