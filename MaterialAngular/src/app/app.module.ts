import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TablapersonaComponent } from './COMPONENTES/Personas/tablapersona/tablapersona.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TablamaestrosComponent } from './COMPONENTES/Maestros/tablamaestros/tablamaestros.component';
import { TablaestudientasComponent } from './COMPONENTES/Estudiantes/tablaestudientas/tablaestudientas.component';
import { FormulariocrearComponent } from './COMPONENTES/Personas/formulariocrear/formulariocrear.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioeditarComponent } from './COMPONENTES/Personas/formularioeditar/formularioeditar.component';
import { LoginComponent } from './COMPONENTES/Login/login/login.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { InicioComponent } from './COMPONENTES/inicio/inicio/inicio.component';
import { FormulariocrearmaestroComponent } from './COMPONENTES/Maestros/formulariocrearmaestro/formulariocrearmaestro.component';
import { FormulariocrearestudianteComponent } from './COMPONENTES/Estudiantes/formulariocrearestudiante/formulariocrearestudiante.component';
import { AuthGuard } from './auth.guard';
import { InterceptorService } from './COMPONENTES/Servicio/interceptor.service';
import { CrearcursoComponent } from './COMPONENTES/cursos/crearcurso/crearcurso.component';
import { EditarcursoComponent } from './COMPONENTES/cursos/editarcurso/editarcurso.component';
import { TablacursosComponent } from './COMPONENTES/cursos/tablacursos/tablacursos.component';
import { EditarcursodocenteComponent } from './COMPONENTES/cursodocente/editarcursodocente/editarcursodocente.component';
import { TablacursodocenteComponent } from './COMPONENTES/cursodocente/tablacursodocente/tablacursodocente.component';
import { TablacursoestudianteComponent } from './COMPONENTES/cursoestudiante/tablacursoestudiante/tablacursoestudiante.component';
import { CrearcursoestudianteComponent } from './COMPONENTES/cursoestudiante/crearcursoestudiante/crearcursoestudiante.component';
import { EditarcursoestudianteComponent } from './COMPONENTES/cursoestudiante/editarcursoestudiante/editarcursoestudiante.component';
import { CrearcursodocenteComponent } from './COMPONENTES/cursodocente/crearcursodocente/crearcursodocente.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TablapersonaComponent,
    TablamaestrosComponent,
    TablaestudientasComponent,
    FormulariocrearComponent,
    FormularioeditarComponent,
    LoginComponent,
    InicioComponent,
    FormulariocrearmaestroComponent,
    FormulariocrearestudianteComponent,
    CrearcursoComponent,
    EditarcursoComponent,
    TablacursosComponent,
    EditarcursodocenteComponent,
    TablacursodocenteComponent,
    TablacursoestudianteComponent,
    CrearcursoestudianteComponent,
    EditarcursoestudianteComponent,
    CrearcursodocenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
