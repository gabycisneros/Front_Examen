import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from '../../Servicio/api.service';
import { TablapersonaDataSource, TablapersonaItem } from './tablapersona-datasource';

@Component({
  selector: 'app-tablapersona',
  templateUrl: './tablapersona.component.html',
  styleUrls: ['./tablapersona.component.css']
})
export class TablapersonaComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TablapersonaItem>;
  dataSource: TablapersonaDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'nombre', 'apellido', 'fecha_nacimiento', 'direccion' ,"Acciones"];

  constructor(private ApiService:ApiService, private Router:Router) {
    this.dataSource = new TablapersonaDataSource();
  }

  ngOnInit(){
    this.dataSource = new TablapersonaDataSource();

    this.ApiService.getpersonas().subscribe(
    (res:any) => {
        console.log(res);
        this.dataSource.data = res;
      }
    )

  }

  eliminarPersonas(id:number){
    console.log(id);
    this.ApiService.deletePersonas(id);
    this.Router.navigate(['/tabla-persona'])
  }

  modificar(id:string){
    this.Router.navigate(['/mmodificarpersona/'+id])
  }

  

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
