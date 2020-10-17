import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient,private router: Router) { }

   
  getlist(){
    const httpHeaders = new HttpHeaders({
      'content-type':'multipart/form-data',
      'Authorization': localStorage.getItem('secretKey')
    });    
    return this.httpClient.get('/apictrl/userlist',{headers:httpHeaders});
  }

  login(loginForm){
    return this.httpClient.post('/apictrl/login',loginForm.value); 
  }

  isLogin(){
    if(localStorage.getItem('secretKey') !== ''){
      return true;
    } else {
      return false;
    }
  }

  logout(){
    console.log('logout');
    localStorage.removeItem('secretKey');
    this.router.navigate(['login']);
  }
}
