import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/core/about/about.component';
import { AutorComponent } from './components/core/autor/autor.component';
import { HomeComponent } from './components/core/home/home.component';
import { ProizvodComponent } from './components/proizvod/proizvod.component';
import { ProizvodjacComponent } from './components/proizvodjac/proizvodjac.component';
import { RacunComponent } from './components/racun/racun.component';


const routes: Routes = [
  { path: 'racun', component: RacunComponent },
  { path: 'proizvod', component: ProizvodComponent},
  { path: 'proizvodjac', component: ProizvodjacComponent},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'autor', component: AutorComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'} //prazna putanja koja vodi ka home komponenti
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
