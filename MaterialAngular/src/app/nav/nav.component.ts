import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SeguridadService } from '../COMPONENTES/Servicio/seguridad.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private Router:Router, private SeguridadService:SeguridadService) {}

  logedIn(){
    return this.SeguridadService.logedIn();
  }

  onLogout(){
       this.SeguridadService.logout();
       this.Router.navigate(['login']);
  }
}
