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
    var ticketNew;
    this.externalApi.getAllTickets(localStorage.getItem("p2c_fcaHash")).subscribe((getAllTicketsRes: Array<any>)=>{
      ticketNew = this.config.ticket
      //console.log('getAllTicketsRes: ',getAllTicketsRes);
      this.allTickets = getAllTicketsRes;
       /* for (let index = 0; index < getAllTicketsRes.length; index++) {
        //console.log('getAllTicketsRes1 : ',getAllTicketsRes[index]);
        if(getAllTicketsRes[index]["preview_url"] != "" || getAllTicketsRes[index]["live_Url"] != "" ){
          console.log('getAllTicketsRes1 : ',getAllTicketsRes[index]);
          ticketNew.push(getAllTicketsRes[index]);
        }
      } */ 
    });
  }

}
