import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SeguridadService } from './COMPONENTES/Servicio/seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private seguridad:SeguridadService, private Router:Router){

  }
  canActivate():boolean{
    if(this.seguridad.logedIn()){
      return true;
    }
    this.Router.navigate(['login']);
    return false;
  }
  
}
