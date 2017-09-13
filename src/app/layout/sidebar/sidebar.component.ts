import {Component, OnInit} from '@angular/core';
import {DiigoService} from '../../service/diigo.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private diigoService: DiigoService) {
  }

  ngOnInit() {
    // this.diigoService.getUserInfo().then(info => {
    //   console.log(info);
    // });
    this.diigoService.login().then(info => {
      console.log(info);
    })
  }

}
