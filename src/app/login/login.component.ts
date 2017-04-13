import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { MdSnackBar } from '@angular/material';

import { LoginService } from '../login.service';
import { ILogin, User,IUser, IUserInfo } from '../data';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  response: IUserInfo;
  user: IUser;
  constructor(private loginService: LoginService, private snackbar:MdSnackBar, private router:Router) { }

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
    
          if(this.response.Login === "true" || this.response.Login === "True")
          {
              this.snackbar.open("Uspješna prijava", 'X', {duration:3000});
              User.loggedUser = this.user;
              User.userInfo = this.response;
              this.router.navigate(['/dashboard']);
              console.log(JSON.stringify(User.userInfo));
          }
          else
            this.snackbar.open("Neuspješna prijava", 'X', {duration:5000});
        }
  ngOnInit() {
  }

}
