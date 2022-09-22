import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './interface/user';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class CommonService{
  baseUrl:any = environment.baseURL;

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private http:HttpClient,
    private router: Router
    ) {}

  getUser(){
    return this.http.get(this.baseUrl);
  }

  addUser(data:any){
    return this.http.post(this.baseUrl,data);
  }
  login(user: User): void {
    if (user.email !== '' && user.password !== '' ) {
      this.loggedIn.next(true);
      this.router.navigate(['lhome']);
    }
  }
  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['login']);
  }
}