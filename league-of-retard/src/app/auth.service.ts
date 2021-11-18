import { Injectable } from '@angular/core';
import {User} from './user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  public login(userData: User){
    localStorage.setItem('ACCESS_TOKEN',"access_token");
  }
  public isLogged(){
    return localStorage.getItem('ACCESS_TOKEN')!==null;
  }
  public disconnect(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
