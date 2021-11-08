import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../Servicio/api.service';
import { TablaestudientasItem } from '../tablaestudientas/tablaestudientas-datasource';

@Component({
  selector: 'app-formulariocrearestudiante',
  templateUrl: './formulariocrearestudiante.component.html',
  styleUrls: ['./formulariocrearestudiante.component.css']
})
export class FormulariocrearestudianteComponent {
  addressForm!: FormGroup;

  constructor(private fb: FormBuilder, private Router:Router, private ApiService:ApiService) {
    this.addressForm = this.fb.group({
      id:[''],
      id_persona: ['', Validators.required],
      fecha_ingreso: ['', Validators.required],
      carnet: ['', Validators.required],
      status: ['', Validators.required],
    });
  }
  agregar(){
    delete this.addressForm.value.id
  }

  onSubmit() {
    console.log(this.addressForm)
    const user: TablaestudientasItem ={

      id_persona: this.addressForm.value.id_persona,
      fecha_ingreso: this.addressForm.value.fecha_ingreso,
      carnet: this.addressForm.value.carnet,
      status: this.addressForm.value.status,
      id: this.addressForm.value.id,
      nombre: this.addressForm.value.nombre,
      apellido: this.addressForm.value.apellido,
      fecha_nacimiento: this.addressForm.value.fecha_nacimiento,
      direccion: this.addressForm.value.direccion
    }
    console.log(user)
    this.agregar();
    this.ApiService.addestudiante(user).subscribe();
    this.Router.navigate(['/Tablasestudiantes'])
  }

 
}
