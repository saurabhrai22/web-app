import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-notificaion-box',
  templateUrl: './notificaion-box.component.html',
  styleUrls: ['./notificaion-box.component.css']
})
export class NotificaionBoxComponent implements OnInit {
  public allTickets:Array<any>;
  
  constructor(public externalApi:ApiService,public config:ConfigService) { }

  ngOnInit() {
    this.externalApi.getAllTickets(localStorage.getItem("p2c_fcaHash")).subscribe((getAllTicketsRes: Array<any>)=>{
      this.allTickets = getAllTicketsRes;
    });
  }

}
