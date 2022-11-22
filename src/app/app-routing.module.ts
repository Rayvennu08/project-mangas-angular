import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { mangaAboutComponent } from './mangas-about/mangas-about.component';
import { mangasVolsComponent } from './mangas-volumes/mangas-volumes.component';

const routes: Routes = [
  {
    //Si el path es vacio se redirecciona a 'mangas'
    path: '',
    redirectTo: 'mangas',
    pathMatch: 'full',
  },
  {
    path: 'mangas',
    component: mangasVolsComponent,
  },
  {
    path: 'about',
    component: mangaAboutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
