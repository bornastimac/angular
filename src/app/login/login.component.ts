import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { MdSnackBar } from '@angular/material';

import { LoginService } from '../login.service';
import { ILogin, User,IUser } from '../data';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  response: ILogin;
  user: IUser;
  constructor(private loginService: LoginService, private snackbar:MdSnackBar) { }

onSubmit(username: string, password: string) {
    this.user =
      {
        username: username,
        password: password
      }

    this.loginService.getLoginResponse(this.user)
      .subscribe(res => 
      {
        this.response = res;
        this.afterLogin();
      });
  }
  afterLogin(){
    
          if(this.response.Login === "True")
          {
              this.snackbar.open("Uspješna prijava", 'X', {duration:3000});
              User.loggedUser = this.user;
              
          }
          else
            this.snackbar.open("Neuspješna prijava", 'X', {duration:5000});

        }
  ngOnInit() {
  }

}
