import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../Servicio/api.service';
import { TablapersonaItem } from '../tablapersona/tablapersona-datasource';

@Component({
  selector: 'app-formulariocrear',
  templateUrl: './formulariocrear.component.html',
  styleUrls: ['./formulariocrear.component.css']
})
export class FormulariocrearComponent {
  addressForm!: FormGroup;
  /*addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });*/

  constructor(private fb: FormBuilder, private Router:Router, private ApiService:ApiService, private ActiveRoute:ActivatedRoute) {
    this.addressForm = this.fb.group({
      id:[''],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      direccion: ['', Validators.required]

    });

  }
  agregar(){
    delete this.addressForm.value.id;
  }


  onSubmit(){
    console.log(this.addressForm)
    const user: TablapersonaItem ={
      id: this.addressForm.value.id,
      nombre: this.addressForm.value.nombre,
      apellido: this.addressForm.value.apellido,
      fecha_nacimiento: this.addressForm.value.fecha_nacimiento,
      direccion: this.addressForm.value.direccion
    }
    console.log(user)
    this.agregar();
    this.ApiService.addpersona(user).subscribe();
    this.Router.navigate(['/TablaPersonas'])

  }

 
}
