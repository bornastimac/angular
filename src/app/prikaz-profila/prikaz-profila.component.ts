import { Component, OnInit } from '@angular/core';
import { PrikazProfilaService } from '../prikaz-profila.service';

@Component({
  selector: 'app-prikaz-profila',
  templateUrl: './prikaz-profila.component.html',
  styleUrls: ['./prikaz-profila.component.css']
})
export class PrikazProfilaComponent implements OnInit {
  userInfo;

  constructor(private prikazService :PrikazProfilaService) {
    
   }

  ngOnInit() {
    // this.prikazService.getProfilResponse()
    
  }

}
