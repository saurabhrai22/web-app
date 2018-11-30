import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public chatDivShow:boolean = false;
  constructor(public config:ConfigService){}
  showChatDiv()
  {
    this.chatDivShow = true;
    window.addEventListener('message',  (evt) => {
      console.log('RAW Data: ',evt.data);
      /* if(evt.data.match("source"))
      { */
        var vaMessage = evt.data;
        if(this.config.checkTypeOf(vaMessage).match('object')){
          if(Object.keys(vaMessage).includes("source")){
            if(vaMessage["source"] == "VA"){
              if(vaMessage["event"] == "va_init")
              {
                var waResponsetoVa = { 
                  source: "WA",
                  event: "wa_init_response",
                  data: {
                    userInfo:
                    {
                        firstName: "John",
                        lastName: "Smith",
                        companyId: "123456",
                        email: "john.smith@accenture.com"
                    },
                    brandDetails:
                    {
                        market: "IT",
                        brand: "FIAT",
                        language: "english"
                    }/* , 
                    iFrameVASize:
                    {
                        height: "500px",
                        width: "500px",
                        class: "vaclass"
                    } */
                  }
                }
                console.log('Message Sent..!');
                window.frames[1].postMessage(waResponsetoVa, '*');

              }
            }
          }
      }
      /* } */
      
    });
  }
}
