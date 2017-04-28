import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User,IUser } from '../data';
import { MdSnackBar } from '@angular/material';


@Component({
  selector: 'app-toolbar-dashboard',
  templateUrl: './toolbar-dashboard.component.html',
  styleUrls: ['./toolbar-dashboard.component.css']
})
export class ToolbarDashboardComponent implements OnInit {
  user:IUser;
  @Output()
  urediProfilevt = new EventEmitter();
  constructor(private router: Router,private snackbar:MdSnackBar) {
    if(User.loggedUser === null)
    {
            this.router.navigate(['/home']);
    }
    this.user = User.loggedUser;
   }

  ngOnInit() {
  }
  logout() {
    User.loggedUser.username = "";
    User.loggedUser.password = "";
    User.userInfo = {
      Login: "",
      IsCompany: "",
      FirstName: "",
      LastName: "",
      Email:  "",
      Profession:  "",
      Keywords:  "",
      City:  "",
      AboutMe:  "",
      Phone:  "",
      CompanyName:  "",
      Fax:  "",
      ContactPhone:  ""
    }
         this.snackbar.open("Uspješna odjava", 'X', {duration:5000});

    this.router.navigate(['/home']);

  }
  urediProfil()
  {
this.urediProfilevt.emit();
  }

  goHome()
  {
    this.logout();
    this.router.navigate(['/home']);
  }

}
