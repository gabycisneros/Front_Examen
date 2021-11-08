import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../Servicio/api.service';
import { TablacursosItem } from '../tablacursos/tablacursos-datasource';

@Component({
  selector: 'app-crearcurso',
  templateUrl: './crearcurso.component.html',
  styleUrls: ['./crearcurso.component.css']
})
export class CrearcursoComponent {
  addressForm!: FormGroup;
   
 

  constructor(private fb: FormBuilder, private Router:Router, private ApiService:ApiService) {
    this.addressForm = this.fb.group({
      id:[''],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  agregar(){
    delete this.addressForm.value.id;
  }


  onSubmit(){
    console.log(this.addressForm)
    const user: TablacursosItem ={
      id: this.addressForm.value.id,
      nombre: this.addressForm.value.nombre,
      descripcion: this.addressForm.value.descripcion
    }
    console.log(user)
    this.agregar();
    this.ApiService.addcurso(user).subscribe();
    this.Router.navigate(['/Tablacursos'])

  }
}
