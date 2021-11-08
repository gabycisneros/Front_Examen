import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from '../../Servicio/api.service';
import { TablacursoestudianteDataSource, TablacursoestudianteItem } from './tablacursoestudiante-datasource';

@Component({
  selector: 'app-tablacursoestudiante',
  templateUrl: './tablacursoestudiante.component.html',
  styleUrls: ['./tablacursoestudiante.component.css']
})
export class TablacursoestudianteComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TablacursoestudianteItem>;
  dataSource: TablacursoestudianteDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'id_estudiante', 'id_curso', 'status', 'fecha_inicio', 'fecha_fin', 'Acciones'];

  constructor(private api:ApiService, private rou:Router) {
    this.dataSource = new TablacursoestudianteDataSource();
  }

  ngOnInit(){
    this.dataSource = new TablacursoestudianteDataSource();

    this.api.getcursosestudiante().subscribe(
    (res:any) => {
        console.log(res);
        this.dataSource.data = res;
      }
    )

  }

  eliminarPersonas(id:number){
    console.log(id);
    this.api.deletecurso(id);
    this.rou.navigate(['/Tablacursoestudiante'])
  }

  modificar(id:string){
    this.rou.navigate(['/Editarcursoestudiante/'+id])
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
