import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../Servicio/api.service';
import { TablamaestrosItem } from '../tablamaestros/tablamaestros-datasource';

@Component({
  selector: 'app-formulariocrearmaestro',
  templateUrl: './formulariocrearmaestro.component.html',
  styleUrls: ['./formulariocrearmaestro.component.css']
})
export class FormulariocrearmaestroComponent {
  addressForm!: FormGroup;

  constructor(private fb: FormBuilder, private Router:Router, private ApiService:ApiService, private ActiveRoute:ActivatedRoute) {

    this.addressForm = this.fb.group({
      id:[''],
      id_persona: ['', Validators.required],
      fecha_ingreso: ['', Validators.required],
      fecha_nacimiento: [''],
      nombre: [''],
      apellido: [''],
      direccion: [''],
    });
  }

  agregar(){
    delete this.addressForm.value.id,
    delete this.addressForm.value.fecha_nacimiento,
    delete this.addressForm.value.nombre,
    delete this.addressForm.value.apellido,
    delete this.addressForm.value.direccion
  }

  onSubmit(){
    console.log(this.addressForm)
    const user: TablamaestrosItem ={
      id: this.addressForm.value.id,
      id_persona: this.addressForm.value.id_persona,
      fecha_ingreso: this.addressForm.value.fecha_ingreso,
      fecha_nacimiento: this.addressForm.value.fecha_nacimiento,
      nombre: this.addressForm.value.nombre,
      apellido: this.addressForm.value.apellido,
      direccion: this.addressForm.value.direccion
    }
    console.log(user)
    this.agregar();
    this.ApiService.addmaestro(user).subscribe();
    this.Router.navigate(['/TablaMaestros'])
  }
  modificar(){

  }
}
