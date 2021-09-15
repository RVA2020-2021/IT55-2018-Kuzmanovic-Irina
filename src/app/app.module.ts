import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/core/home/home.component';
import { AutorComponent } from './components/core/autor/autor.component';
import { AboutComponent } from './components/core/about/about.component';
import { RacunComponent } from './components/racun/racun.component';
import { ProizvodjacComponent } from './components/proizvodjac/proizvodjac.component';
import { ProizvodComponent } from './components/proizvod/proizvod.component';
import { StavkaRacunaComponent } from './components/stavka-racuna/stavka-racuna.component';
import { RacunDialogComponent } from './components/dialogs/racun-dialog/racun-dialog.component';
import { ProizvodjacDialogComponent } from './components/dialogs/proizvodjac-dialog/proizvodjac-dialog.component';
import { ProizvodDialogComponent } from './components/dialogs/proizvod-dialog/proizvod-dialog.component';
import { StavkaRacunaDialogComponent } from './components/dialogs/stavka-racuna-dialog/stavka-racuna-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AutorComponent,
    AboutComponent,
    RacunComponent,
    ProizvodjacComponent,
    ProizvodComponent,
    StavkaRacunaComponent,
    RacunDialogComponent,
    ProizvodjacDialogComponent,
    ProizvodDialogComponent,
    StavkaRacunaDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    MatTableModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatSortModule,
    MatPaginatorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
