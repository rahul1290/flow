import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }

  ngOnInit(){
    this.getlist();
  }

  userList: any;
  getlist(){
    this.httpClient.get('http://emp2.ibc24.in/nfs/api/apictrl/userlist').subscribe(data => {
      this.userList = data;
      console.log(data);
    });
  }

  loginform(loginForm:NgForm){
    console.log(loginForm.value.identity);
  }

}
