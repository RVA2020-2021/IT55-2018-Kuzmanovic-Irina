import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Proizvod } from 'src/app/models/proizvod';
import { Racun } from 'src/app/models/racun';
import { StavkaRacuna } from 'src/app/models/stavkaRacuna';
import { StavkaRacunaService } from 'src/app/services/stavka-racuna.service';
import { StavkaRacunaDialogComponent } from '../dialogs/stavka-racuna-dialog/stavka-racuna-dialog.component';

@Component({
  selector: 'app-stavka-racuna',
  templateUrl: './stavka-racuna.component.html',
  styleUrls: ['./stavka-racuna.component.css'],
})
export class StavkaRacunaComponent implements OnInit, OnChanges, OnDestroy {
  displayedColumns = [
    'id',
    'redniBroj',
    'kolicina',
    'jedinicaMere',
    'cena',
    'racun',
    'proizvod',
    'actions',
  ];
  dataSource: MatTableDataSource<StavkaRacuna>;
  subscription: Subscription;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  @Input() selektovaniProizvod: Proizvod;

  constructor(
    private stavkaRacunaService: StavkaRacunaService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnChanges(): void {
    if (this.selektovaniProizvod.id) {
      this.loadData();
    }
  }

  public loadData() {
    (this.subscription = this.stavkaRacunaService
      .getStavkeZaRacun(this.selektovaniProizvod.id)
      .subscribe((data) => {
        this.dataSource = new MatTableDataSource(data);

        this.dataSource.filterPredicate = (data, filter: string) => {
          const accumulator = (currentTerm, key) => {
            return key === 'proizvod'
              ? currentTerm + data.proizvod.naziv
              : currentTerm + data[key];
          };
          const dataStr = Object.keys(data)
            .reduce(accumulator, '')
            .toLowerCase();
          const transformedFilter = filter.trim().toLowerCase();
          return dataStr.indexOf(transformedFilter) !== -1;
        };

        this.dataSource.sortingDataAccessor = (data, property) => {
          switch (property) {
            case 'proizvod':
              return data.proizvod.naziv.toLocaleLowerCase();
            default:
              return data[property];
          }
        };

        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      })),
      (error: Error) => {
        console.log(error.name + ' ' + error.message);
      };
  }

  public openDialog(
    flag: number,
    id?: number,
    redniBroj?: number,
    kolicina?: number,
    jedinicaMere?: string,
    cena?: number,
    racun?: Racun,
    proizvod?: Proizvod
  ) {
    console.log(proizvod);

    const dialogRef = this.dialog.open(StavkaRacunaDialogComponent, {
      data: { id, redniBroj, kolicina, jedinicaMere, cena, racun, proizvod },
    });
    dialogRef.componentInstance.flag = flag;
    if (flag === 1) {
      dialogRef.componentInstance.data.proizvod = this.selektovaniProizvod;
    }
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        this.loadData();
      }
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue;
  }
}
