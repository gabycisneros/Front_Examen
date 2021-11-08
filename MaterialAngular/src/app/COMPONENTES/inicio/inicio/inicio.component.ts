import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from '../../Servicio/api.service';
import { InicioDataSource, InicioItem } from './inicio-datasource';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<InicioItem>;
  dataSource: InicioDataSource;

  displayedColumns = ['nombre', 'apellido', 'carnet'];

  constructor(private ApiService:ApiService, private Router:Router) {
    this.dataSource = new InicioDataSource();
  }

  ngOnInit() {
    this.dataSource = new InicioDataSource();
    this.ApiService.getprincipal().subscribe(
      res => {
        console.log(res);
        this.dataSource.data = res;

      }
    )

  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
