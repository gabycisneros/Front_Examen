import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../Servicio/api.service';
import { TablapersonaItem } from '../tablapersona/tablapersona-datasource';

@Component({
  selector: 'app-formularioeditar',
  templateUrl: './formularioeditar.component.html',
  styleUrls: ['./formularioeditar.component.css']
})
export class FormularioeditarComponent {
  addressForm: FormGroup;
  uno: TablapersonaItem ={
    id:'',
    nombre:'',
    apellido:'',
    direccion:'',
    fecha_nacimiento:''
  }

  

  constructor(private fb: FormBuilder, private Router:Router, private ApiService:ApiService, private ActiveRoute:ActivatedRoute) {
    this.addressForm = this.fb.group({
      id:'',
      id_persona: ['', Validators.required],
      fecha_ingreso: ['', Validators.required],
      fecha_nacimiento: [''],
      nombre: [''],
      apellido: [''],
      direccion: [''],
    });

  }

  ngOnInit(): void {
    const id_entrada = <string>this.ActiveRoute.snapshot.params['id'];
    
    console.log('Id de entrada:' +id_entrada);

    if(id_entrada){
      this.ApiService.getunapersona(id_entrada).subscribe(
      (res:any)=>{

          this.uno=<any>res[0];
          console.log(res[0])

        },
        err=>console.log(err)

      );
    }
  }


  onSubmit(): void {
    this.ApiService
    this.ApiService.editpersona(this.uno.id, this.uno).subscribe(
      res=>{
        console.log(res)
      },
      err=>console.log(err)

    );
    this.Router.navigate(['/TablaPersonas'])

  }
}
