import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from '../../Servicio/api.service';
import { TablacursodocenteDataSource, TablacursodocenteItem } from './tablacursodocente-datasource';

@Component({
  selector: 'app-tablacursodocente',
  templateUrl: './tablacursodocente.component.html',
  styleUrls: ['./tablacursodocente.component.css']
})
export class TablacursodocenteComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TablacursodocenteItem>;
  dataSource: TablacursodocenteDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'id_docente', 'id_curso', 'status', 'fecha_inicio', 'fecha_fin', 'Acciones'];

  constructor(private ApiService:ApiService, private Router:Router) {
    this.dataSource = new TablacursodocenteDataSource();
  }

  ngOnInit(){
    this.dataSource = new TablacursodocenteDataSource();

    this.ApiService.getcursodocente().subscribe(
    (res:any) => {
        console.log(res);
        this.dataSource.data = res;
      }
    )

  }

  eliminarPersonas(id:number){
    console.log(id);
    this.ApiService.deletecurso(id);
    this.Router.navigate(['/Tablacursodocente'])
  }

  modificar(id:string){
    this.Router.navigate(['/Editarcursodocente/'+id])
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
