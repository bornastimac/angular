import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User, IUser } from '../data';
import { AppComponent } from '../app.component';
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
  constructor() {
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
      return false;
  }

  clickEmit(itemClicked: string) {
    this.onItemClick.emit(itemClicked);
  }


}
