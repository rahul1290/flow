import { HttpClient, HttpHeaders } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //constructor(private httpClient:HttpClient) { }
  constructor(public authservice:AuthService,public router:Router) { 
    if(localStorage.getItem('secretKey') != null){
      this.router.navigate(['entryform/story-file']);
    }
  }

  ngOnInit(){
    console.log();
    //this.getlist();
  }

   userList: any;
   getlist(){
      this.authservice.getlist().subscribe(data => {
        this.userList = data;
        //console.log(data);
      });
   }
  

   loginform(loginForm:NgForm){
     this.authservice.login(loginForm).subscribe(data => {
      localStorage.setItem('secretKey', data[0].key);
      this.router.navigate(['entryform/story-file']);
     },()=>{
       alert('Identity and password not matched.please try again.');
     });
   }
}
