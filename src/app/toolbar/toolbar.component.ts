import { Component, OnInit } from '@angular/core';
import { User, IUser } from '../data';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

currentUser : IUser;
  constructor() { 
  }

  ngOnInit() {

  }
isLogged()
{
 if(User.loggedUser.username != '')
 {
   this.currentUser = User.loggedUser;
 return true;
 }
 else
 return false;
}

}
