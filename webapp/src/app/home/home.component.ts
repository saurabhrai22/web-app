import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ApiService } from '../api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	 
  constructor( public api:ApiService, public router:Router ) { }

  ngOnInit() { 
    if(localStorage.p2c_fcaHash == undefined ){
      this.router.navigate(['/login']);
    } 
  }

  generateTiciet(){
    var ticketData = { user_id: localStorage.p2c_fcaHash, ticket_num :'FCATK-123456', status: '2', notify:'1' }
    this.api.generateTicketapi(JSON.stringify(ticketData)).subscribe((data: {}) => {
     console.log('Ticket Generated .!',data);
     alert('Dummy Ticket Generated .!\n Ticket No.: '+ticketData.ticket_num);
    });
  }
}
