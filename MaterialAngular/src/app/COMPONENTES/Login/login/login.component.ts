import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeguridadService, user } from '../../Servicio/seguridad.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: user = {
    id: 0,
    nombre: '',
    contrasena: ''
  };
  addressForm = this.fb.group({

    id: [""],
    nombre: [null, Validators.required],
    contrasena: [null, Validators.required],

  });

  constructor(private fb: FormBuilder, private seguridad: SeguridadService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.seguridad.login(this.user).subscribe(
      (res) =>{
        localStorage.setItem('token', res.token);
        this.router.navigate(['crearpersona']);
      }
    )
  }

}
