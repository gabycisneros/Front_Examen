import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TablacursodocenteItem } from '../cursodocente/tablacursodocente/tablacursodocente-datasource';
import { TablacursoestudianteItem } from '../cursoestudiante/tablacursoestudiante/tablacursoestudiante-datasource';
import { TablacursosItem } from '../cursos/tablacursos/tablacursos-datasource';
import { TablaestudientasDataSource, TablaestudientasItem } from '../Estudiantes/tablaestudientas/tablaestudientas-datasource';
import { InicioItem } from '../inicio/inicio/inicio-datasource';
import { TablamaestrosItem } from '../Maestros/tablamaestros/tablamaestros-datasource';
import { TablapersonaItem } from '../Personas/tablapersona/tablapersona-datasource';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'https://salty-mesa-38125.herokuapp.com/estudiantes';
  url2 = 'https://salty-mesa-38125.herokuapp.com/personas';
  url3 = 'https://salty-mesa-38125.herokuapp.com/Maestros';
  url4 = 'https://salty-mesa-38125.herokuapp.com/inicio';
  url5 = 'https://salty-mesa-38125.herokuapp.com/cursos';
  url6 = 'https://salty-mesa-38125.herokuapp.com/estudiante_curso';
  url7 = 'https://salty-mesa-38125.herokuapp.com/curso_docente';

  constructor(private http:HttpClient) { }

  //estudiantes 
  getestudiantes():Observable<TablaestudientasItem[]>{
    return this.http.get<TablaestudientasItem[]>(this.url);
  }
  getunestudiante(id:string){
    return this.http.get(this.url+'/'+id);
  }
  editestudiante(id:string, Estudiante:TablaestudientasItem){
    return this.http.put(this.url+'/'+id,Estudiante);

  }
  deleteEstudiantes(id:number){
    this.http.delete(this.url+'/'+id).subscribe(
      res => console.log(res)
    )
  }

  addestudiante(Estudiante:TablaestudientasItem){
    return this.http.post(this.url, Estudiante);

  }

  // Personas
  getunapersona(id:string){
    return this.http.get(this.url2+'/'+id);
  }

  editpersona(id:string, Persona:TablapersonaItem){
    return this.http.put(this.url2+'/'+id,Persona);

  }

  addpersona(Perosna:TablapersonaItem){
    return this.http.post(this.url2, Perosna);

  }

  deletePersonas(id:number){
    this.http.delete(this.url2+'/'+id).subscribe(
      res => console.log(res)
    )
  }

  getpersonas():Observable<TablamaestrosItem[]>{
    return this.http.get<TablamaestrosItem[]>(this.url2);
  }

  //maestros
  getmaestros():Observable<TablamaestrosItem[]>{
    return this.http.get<TablamaestrosItem[]>(this.url3);
  }

  addmaestro(Maesto:TablamaestrosItem){
    return this.http.post(this.url3, Maesto);

  }

  getunmaestro(id:string){
    return this.http.get(this.url3+'/'+id);
  }

  editmaestro(id:string, Maestro:TablamaestrosItem){
    return this.http.put(this.url3+'/'+id,Maestro);

  }

  deleteMaestros(id:number){
    this.http.delete(this.url3+'/'+id).subscribe(
      res => console.log(res)
    )
  }

  getprincipal():Observable<InicioItem[]>{
    return this.http.get<InicioItem[]>(this.url4);
  }
  //cursos
  getcursos():Observable<TablacursosItem[]>{
    return this.http.get<TablacursosItem[]>(this.url5);
  }

  addcurso(Perosna:TablacursosItem){
    return this.http.post(this.url5, Perosna);

  }

  deletecurso(id:number){
    this.http.delete(this.url5+'/'+id).subscribe(
      res => console.log(res)
    )
  }

  getuncurso(id:string){
    return this.http.get(this.url5+'/'+id);
  }
  editcurso(id:string, Persona:TablacursosItem){
    return this.http.put(this.url5+'/'+id,Persona);

  }

  //cursos-estudiante
  getcursosestudiante():Observable<TablacursoestudianteItem[]>{
    return this.http.get<TablacursoestudianteItem[]>(this.url6);
  }

  addcursoestudiante(Perosna:TablacursoestudianteItem){
    return this.http.post(this.url6, Perosna);

  }

  deletecursoestudiante(id:number){
    this.http.delete(this.url6+'/'+id).subscribe(
      res => console.log(res)
    )
  }

  getuncursoestudiante(id:string){
    return this.http.get(this.url6+'/'+id);
  }
  editcursoestudiante(id:string, Persona:TablacursoestudianteItem){
    return this.http.put(this.url6+'/'+id,Persona);

  }

  //cursos-docente
  getcursodocente():Observable<TablacursodocenteItem[]>{
    return this.http.get<TablacursodocenteItem[]>(this.url7);
  }

  addcursodocente(Perosna:TablacursodocenteItem){
    return this.http.post(this.url7, Perosna);

  }

  deletecursodocente(id:number){
    this.http.delete(this.url7+'/'+id).subscribe(
      res => console.log(res)
    )
  }

  getuncursodocente(id:string){
    return this.http.get(this.url7+'/'+id);
  }
  editcursodocente(id:string, Persona:TablacursodocenteItem){
    return this.http.put(this.url7+'/'+id,Persona);

  }

  

}
