import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from '../../Servicio/api.service';
import { TablamaestrosDataSource, TablamaestrosItem } from './tablamaestros-datasource';

@Component({
  selector: 'app-tablamaestros',
  templateUrl: './tablamaestros.component.html',
  styleUrls: ['./tablamaestros.component.css']
})
export class TablamaestrosComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TablamaestrosItem>;
  dataSource: TablamaestrosDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'id_persona', 'nombre', 'apellido', 'fecha_nacimiento', 'direccion', 'fecha_ingreso', 'Acciones'];

  constructor(private ApiService:ApiService,  private Router:Router) {
    this.dataSource = new TablamaestrosDataSource();
  }

  ngOnInit(){
    this.dataSource = new TablamaestrosDataSource();
    this.ApiService.getmaestros().subscribe(
      res => {
        console.log(res);
        this.dataSource.data = res;

      }
    )

  }

  eliminarPersonas(id:number){
    console.log(id);
    this.ApiService.deleteMaestros(id);
    this.Router.navigate(['/tabla-maestro'])
  }

  modificar(id:string){
    this.Router.navigate(['/mmodificarmaestro/'+id])
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
