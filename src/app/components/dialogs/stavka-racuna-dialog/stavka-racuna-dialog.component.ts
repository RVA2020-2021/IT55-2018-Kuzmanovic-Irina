import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { Proizvod } from 'src/app/models/proizvod';
import { Racun } from 'src/app/models/racun';
import { StavkaRacuna } from 'src/app/models/stavkaRacuna';
import { ProizvodService } from 'src/app/services/proizvod.service';
import { RacunService } from 'src/app/services/racun.service';
import { StavkaRacunaService } from 'src/app/services/stavka-racuna.service';

@Component({
  selector: 'app-stavka-racuna-dialog',
  templateUrl: './stavka-racuna-dialog.component.html',
  styleUrls: ['./stavka-racuna-dialog.component.css'],
})
export class StavkaRacunaDialogComponent implements OnInit, OnDestroy {
  racuni: Racun[];
  public flag: number;
  subscription: Subscription;

  constructor(
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<StavkaRacunaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: StavkaRacuna,
    public stavkaRacunaService: StavkaRacunaService,
    public racunService: RacunService
  ) {}

  ngOnInit(): void {
    (this.subscription = this.racunService.getAllRacune().subscribe((racun) => {
      this.racuni = racun;
    })),
      (error: Error) => {
        console.log(error.name + ' ' + error.message);
      };
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  compareTo(a, b) {
    return a.id === b.id;
  }

  public add(): void {
    this.stavkaRacunaService.addStavkaRacuna(this.data).subscribe(() => {
      this.snackBar.open('Uspesno dodata stavka racuna!', 'U redu', {
        duration: 2500,
      });
    }),
      (error: Error) => {
        console.log(error.name + ' ' + error.message);
        this.snackBar.open('Dogodila se greska!', 'Zatvori', {
          duration: 1500,
        });
      };
  }

  public update(): void {
    console.log(this.data);
    this.stavkaRacunaService.updateStavkaRacuna(this.data).subscribe((data) => {
      console.log(data);
      this.snackBar.open('Uspesno modifikovana stavka racuna!', 'U redu', {
        duration: 2500,
      });
    }),
      (error: Error) => {
        console.log(error.name + ' ' + error.message);
        this.snackBar.open('Dogodila se greska!', 'Zatvori', {
          duration: 1500,
        });
      };
  }

  public delete(): void {
    this.stavkaRacunaService.deleteStavkaRacuna(this.data.id).subscribe(() => {
      this.snackBar.open('Uspesno obrisana stavka racuna!', 'U redu', {
        duration: 2500,
      });
    }),
      (error: Error) => {
        console.log(error.name + ' ' + error.message);
        this.snackBar.open('Dogodila se greska!', 'Zatvori', {
          duration: 1500,
        });
      };
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste!', 'Zatvori', {
      duration: 1500,
    });
  }
}
