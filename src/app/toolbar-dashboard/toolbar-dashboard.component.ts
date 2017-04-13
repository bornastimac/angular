import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User,IUser } from '../data';


@Component({
  selector: 'app-toolbar-dashboard',
  templateUrl: './toolbar-dashboard.component.html',
  styleUrls: ['./toolbar-dashboard.component.css']
})
export class ToolbarDashboardComponent implements OnInit {
  user:IUser;
  constructor(private router: Router) {
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
    this.router.navigate(['/home']);

  }

}
