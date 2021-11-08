import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from '../../Servicio/api.service';
import { TablacursosDataSource, TablacursosItem } from './tablacursos-datasource';

@Component({
  selector: 'app-tablacursos',
  templateUrl: './tablacursos.component.html',
  styleUrls: ['./tablacursos.component.css']
})
export class TablacursosComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TablacursosItem>;
  dataSource: TablacursosDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'nombre', 'descripcion', 'Acciones'];

  constructor(private ApiService:ApiService, private Router:Router) {
    this.dataSource = new TablacursosDataSource();
  }

  ngOnInit(){
    this.dataSource = new TablacursosDataSource();

    this.ApiService.getcursos().subscribe(
    (res:any) => {
        console.log(res);
        this.dataSource.data = res;
      }
    )

  }

  eliminarPersonas(id:number){
    console.log(id);
    this.ApiService.deletecurso(id);
    this.Router.navigate(['/Tablacurso'])
  }

  modificar(id:string){
    this.Router.navigate(['/Editarcurso/'+id])
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
