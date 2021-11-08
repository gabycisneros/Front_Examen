import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../Servicio/api.service';
import { TablacursoestudianteItem } from '../tablacursoestudiante/tablacursoestudiante-datasource';

@Component({
  selector: 'app-crearcursoestudiante',
  templateUrl: './crearcursoestudiante.component.html',
  styleUrls: ['./crearcursoestudiante.component.css']
})
export class CrearcursoestudianteComponent {
  addressForm!: FormGroup;



  constructor(private fb: FormBuilder, private ApiService:ApiService, private Router:Router) {
    this.addressForm = this.fb.group({
      id:[''],
      id_estudiante: ['', Validators.required],
      id_curso: ['', Validators.required],
      status: ['', Validators.required],
      fecha_inicio: ['', Validators.required],
      fecha_fin: ['', Validators.required]
    });
  }

  agregar(){
    delete this.addressForm.value.id;
  }


  onSubmit(){
    console.log(this.addressForm)
    const user: TablacursoestudianteItem ={
      id: this.addressForm.value.id,
      id_estudiante: this.addressForm.value.id_estudiante,
      id_curso: this.addressForm.value.id_curso,
      status: this.addressForm.value.status,
      fecha_inicio: this.addressForm.value.fecha_inicio,
      fecha_fin: this.addressForm.value.fecha_fin,
    }
    console.log(user)
    this.agregar();
    this.ApiService.addcursoestudiante(user).subscribe();
    this.Router.navigate(['/Tablacursoestudiante'])

  }
}
