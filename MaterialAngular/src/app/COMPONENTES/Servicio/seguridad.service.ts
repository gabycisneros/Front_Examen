import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  private URL = 'https://salty-mesa-38125.herokuapp.com/'

  constructor(private HttpClient: HttpClient) { }
  login(user:user){
    return this.HttpClient.post<any>(this.URL + 'login', user);
  }
  logout(){
    localStorage.removeItem('token');
  }
  logedIn(){
    return !!localStorage.getItem('token');
  }
  getToken(){
    return localStorage.getItem('token')
  }
}

export interface user {
  id:number;
  nombre:string;
  contrasena:string;
}
