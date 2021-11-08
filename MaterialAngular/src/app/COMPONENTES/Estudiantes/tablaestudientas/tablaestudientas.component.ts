import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from '../../Servicio/api.service';
import { TablaestudientasDataSource, TablaestudientasItem } from './tablaestudientas-datasource';

@Component({
  selector: 'app-tablaestudientas',
  templateUrl: './tablaestudientas.component.html',
  styleUrls: ['./tablaestudientas.component.css']
})
export class TablaestudientasComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TablaestudientasItem>;
  dataSource: TablaestudientasDataSource;

  
  displayedColumns = ['id', 'id_persona', 'nombre', 'apellido', 'fecha_nacimiento', 'direccion', 'carnet', 'fecha_ingreso', 'status', 'Acciones'];

  constructor(private ApiService:ApiService, private Router:Router) {
    this.dataSource = new TablaestudientasDataSource();
  }

  ngOnInit(){
    this.dataSource = new TablaestudientasDataSource();
    this.ApiService.getestudiantes().subscribe(
      res => {
        console.log(res);
        this.dataSource.data = res;

      }
    )

  }

  eliminarPersonas(id:number){
    console.log(id);
    this.ApiService.deleteEstudiantes(id);
    this.Router.navigate(['/tabla-estudiante'])
  }

  modificar(id:string){
    this.Router.navigate(['/cambiarestudiante/'+id])
  }

 

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
