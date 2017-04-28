import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User, IUser } from '../data';
import { AppComponent } from '../app.component';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  host: {
    '(window:scroll)': 'updateHeader($event)'
  }
})
export class ToolbarComponent implements OnInit {
  @Output() onItemClick = new EventEmitter<string>();
  currentUser: IUser;
  isScrolled = false;
  constructor(private snackbar:MdSnackBar) {
  }

  ngOnInit() {

  }
  updateHeader(evt) {
    if (window.pageYOffset > 0) {
      this.isScrolled = true;
    }
    else {
      this.isScrolled = false;
    }
  }
  isLogged() {
    if (User.loggedUser.username != '') {
      this.currentUser = User.loggedUser;
      return true;
    }
    else
    {
      return false;
    }
  }

  clickEmit(itemClicked: string) {
    this.onItemClick.emit(itemClicked);
  }

logout()
{
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

}

}
