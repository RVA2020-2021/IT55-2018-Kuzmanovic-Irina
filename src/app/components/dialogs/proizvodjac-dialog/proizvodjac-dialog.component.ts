import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Proizvodjac } from 'src/app/models/proizvodjac';
import { ProizvodjacService } from 'src/app/services/proizvodjac.service';

@Component({
  selector: 'app-proizvodjac-dialog',
  templateUrl: './proizvodjac-dialog.component.html',
  styleUrls: ['./proizvodjac-dialog.component.css']
})
export class ProizvodjacDialogComponent implements OnInit {

  public flag:  number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<ProizvodjacDialogComponent>,
              @Inject (MAT_DIALOG_DATA) public data: Proizvodjac,
              public proizvodjacService: ProizvodjacService) { }

  ngOnInit(): void {
  }

  public add(): void{
    this.proizvodjacService.addProizvodjac(this.data)
      .subscribe(()=>{
        this.snackBar.open('Uspesno dodat proizvodjac: ' + this.data.naziv, 'U redu',{
          duration: 2500
        });
      }),
      (error: Error) => {
        console.log(error.name + '-->' + error.message);
        this.snackBar.open('Dogodila se greska. Pokusajte ponovo!','Zatvori',{
          duration: 2500
        });
      };
  }

  public update(): void{
    this.proizvodjacService.updateProizvodjac(this.data)
      .subscribe(() =>{
        this.snackBar.open('Uspesno modifikovan proizvodjac: ' + this.data.naziv, 'U redu',{
          duration: 2500
        });
      }),
      (error: Error) => {
        console.log(error.name + '-->' + error.message);
        this.snackBar.open('Dogodila se greska. Pokusajte ponovo!','Zatvori',{
          duration: 2500
        });
      };
  }

  public delete(): void{
    this.proizvodjacService.deleteProizvodjac(this.data.id)
      .subscribe(() =>{
        this.snackBar.open('Uspesno obrisan proizvodjac ', 'U redu',{
          duration: 2500
        });
      }),
      (error: Error) => {
        console.log(error.name + '-->' + error.message);
        this.snackBar.open('Dogodila se greska. Pokusajte ponovo!','Zatvori',{
          duration: 2500
        });
      };
  }

  public cancel(): void{
    this.dialogRef.close();
    this.snackBar.open('Odustali ste od izmena!', 'U redu',{
      duration: 1000
    });
  }

}
