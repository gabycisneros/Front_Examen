import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CrearcursodocenteComponent } from './COMPONENTES/cursodocente/crearcursodocente/crearcursodocente.component';
import { TablacursodocenteComponent } from './COMPONENTES/cursodocente/tablacursodocente/tablacursodocente.component';
import { CrearcursoestudianteComponent } from './COMPONENTES/cursoestudiante/crearcursoestudiante/crearcursoestudiante.component';
import { TablacursoestudianteComponent } from './COMPONENTES/cursoestudiante/tablacursoestudiante/tablacursoestudiante.component';
import { CrearcursoComponent } from './COMPONENTES/cursos/crearcurso/crearcurso.component';
import { TablacursosComponent } from './COMPONENTES/cursos/tablacursos/tablacursos.component';
import { FormulariocrearestudianteComponent } from './COMPONENTES/Estudiantes/formulariocrearestudiante/formulariocrearestudiante.component';
import { TablaestudientasComponent } from './COMPONENTES/Estudiantes/tablaestudientas/tablaestudientas.component';
import { InicioComponent } from './COMPONENTES/inicio/inicio/inicio.component';
import { LoginComponent } from './COMPONENTES/Login/login/login.component';;
import { FormulariocrearmaestroComponent } from './COMPONENTES/Maestros/formulariocrearmaestro/formulariocrearmaestro.component';
import { TablamaestrosComponent } from './COMPONENTES/Maestros/tablamaestros/tablamaestros.component';
import { FormulariocrearComponent } from './COMPONENTES/Personas/formulariocrear/formulariocrear.component';
import { TablapersonaComponent } from './COMPONENTES/Personas/tablapersona/tablapersona.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'TablaEstudiante', component: TablaestudientasComponent, canActivate:[AuthGuard]},
  {path: 'TablaPersonas', component: TablapersonaComponent, canActivate:[AuthGuard]},
  {path: 'TablaMaestros', component: TablamaestrosComponent, canActivate:[AuthGuard]},
  {path: 'Inicio', component: InicioComponent, canActivate:[AuthGuard]},
  {path: 'crearpersona', component: FormulariocrearComponent, canActivate:[AuthGuard]},
  {path: 'crearmaestro', component: FormulariocrearmaestroComponent, canActivate:[AuthGuard]},
  {path: 'crearestudiante', component: FormulariocrearestudianteComponent, canActivate:[AuthGuard]},
  {path: 'crearcurso', component: CrearcursoComponent, canActivate:[AuthGuard]},
  {path: 'Tablacurso', component: TablacursosComponent, canActivate:[AuthGuard]},
  {path: 'Tablacursoestudiante', component: TablacursoestudianteComponent, canActivate:[AuthGuard]},
  {path: 'Crearcursoestudiante', component: CrearcursoestudianteComponent, canActivate:[AuthGuard]},
  {path: 'Crearcursodocente', component: CrearcursodocenteComponent, canActivate:[AuthGuard]},
  {path: 'Tablacursodocente', component: TablacursodocenteComponent, canActivate:[AuthGuard]},
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
