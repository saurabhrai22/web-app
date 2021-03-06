import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ApiService } from '../api.service'
import { ConfigService } from '../config.service'
declare var $:any ;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  url: String;
  public chatDivShow:boolean = false;
  public editorDivShow = false;
  public iframeSize ;
  public compData ;
  constructor( public externalApi:ApiService, public router:Router, public config:ConfigService ) { }


  ngOnInit() {
    this.editorDivShow = false;
     /*if(localStorage.p2c_fcaHash == undefined ){
      this.router.navigate(['/login']);
    }  */
    //this.url = "https://auth-dev6b2c.emea.fcagroup.com/content/fiat/fiat-it/it/home.html?wcmmode=disabled";
    //this.url = "http://localhost:3000/pages/fiat_new.html";
    this.url = "https://test-webapp-basefile.azurewebsites.net/fiat.html";
    window.addEventListener('message',  (evt) => {
      
      if(this.config.checkTypeOf(evt.data).match('string'))
      {
     /*  if(evt.data.match('iFrameVASize'))
      {
        console.log('Iframe data got!');
        this.sendMessageToVA();
      }
      else if(evt.data.match('closeiframe'))
      {
        this.chatDivShow = false;
      } */
    }
    else if(this.config.checkTypeOf(evt.data).match('object')){
      //console.log('Object iframe: ',evt.data);
      
      var vaMessage = evt.data;
        if(Object.keys(vaMessage).includes("source")){
          if(vaMessage["source"] == "iframe")
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
                }
              }
            }
            waResponsetoVa.data["metadata"] = vaMessage.newCanvasMetadata;
            console.log("waResponsetoVa",waResponsetoVa);
            $.each(document.getElementsByTagName("iframe"),function(index,data){
              if(data.id == "chatbot-frame")
              {
                window.frames[index].postMessage(waResponsetoVa, '*');
              }
            });

          }
          else if(vaMessage["source"] == "VA"){
            console.log("vaMessage: ",vaMessage);
            if(vaMessage["event"] == "va_init")
            {
              $.each(document.getElementsByTagName("iframe"),function(index,data){
                if(data.id == "main-iframe-id")
                {
                  window.frames[index].postMessage("getNewCanvas", '*');
                }
              });
              
              
              //
            /*   for (let index = 0; index < document.getElementsByTagName("iframe").length; index++) {
                if(document.getElementsByTagName("iframe")[index].id == "chatbot-frame")
                {
                  console.log('Message Sent..!',index);
                  window.frames[index].postMessage(waResponsetoVa, '*');
                }
                else{
                  console.log('Iframe not matched..!');
                }
              }
              console.log('document.getElementsByTagName("iframe")',document.getElementsByTagName("iframe"));
               */
             

            }
          
        }
    }
    }
    });
  }

  searchInDatasetArr(val1 , myArray){
    for (var i=0; i < myArray.length ; i++) {
        if (myArray[i].p2cresource == val1) {
            return i;
        }
    }
	
}

  showEditorDiv(dataFromIframe)
  {
    //.split(':')[1].strip('{').strip('}')
    //.split(':')[1].strip('{').strip('}').match('richtext')
    //console.log('Element Identify: ', dataFromIframe["p2cresourceobject"][dataFromIframe.p2cdata].split(':')[1].replace('{','').replace('}',''))
    //console.log('Type of: ',this.config.checkTypeOf(dataFromIframe["p2cresourceobject"][dataFromIframe.p2cdata]));
    if(this.config.checkTypeOf(dataFromIframe["p2cresourcemetadata"][dataFromIframe.p2cdata]).match('string'))
    {/* 
      if(dataFromIframe["p2cresourceobject"][dataFromIframe.p2cdata].split(':')[1].replace('{','').replace('}','') == "richtext")
      {
        this.compData = dataFromIframe;
        this.editorDivShow = true;
      }
      else if(dataFromIframe["p2cresourceobject"][dataFromIframe.p2cdata].split(':')[1].replace('{','').replace('}','') == "text")
      {
        this.compData = dataFromIframe;
        this.editorDivShow = true;
      }
      else if(dataFromIframe["p2cresourceobject"][dataFromIframe.p2cdata].split(':')[1].replace('{','').replace('}','') == "richtext")
      {
        this.compData = dataFromIframe;
        this.editorDivShow = true;
      }
      else
      {
        console.log('Wrong Comp..!');
      } */
    }
    else if(this.config.checkTypeOf(dataFromIframe["p2cresourcemetadata"][dataFromIframe.p2cdata]).match('object')){
      this.compData = dataFromIframe["p2cresourcemetadata"][dataFromIframe.p2cdata];
      console.log('Comp Data: ',this.compData);
      console.log("Key : ",dataFromIframe["p2cresourcemetadata"][dataFromIframe.p2cdata]["key"]);
      console.log("Type : ",dataFromIframe["p2cresourcemetadata"][dataFromIframe.p2cdata]["type"]);
      console.log("Value : ",dataFromIframe["p2cresourcemetadata"][dataFromIframe.p2cdata]["value"]);
      this.config.metaDataFromIframe = dataFromIframe;
      //this.config.metaDataFromIframe = $($.parseHTML(dataFromIframe["p2cresourcemetadata"][dataFromIframe.p2cdata]["value"]));
      //console.log('Parsed HTML: ',this.config.metaDataFromIframe);
      //console.log(this.config.htmlFromIframe.find(dataFromIframe["p2cresourcemetadata"][dataFromIframe["p2cdata"]])[0].outerHTML);
      this.editorDivShow = true;
    }
  }
  closeEditorDiv(boolVal)
  {
    this.editorDivShow = boolVal;
  }
  showChatDiv()
  {
    this.chatDivShow = true;
  }
   generateTiciet(send){
     /* this.config.dataSetArrForRPA.forEach(element => {
      console.log('element',element["update"]);
      Object.keys(element["update"]).forEach(keys => {
        delete element["update"][keys]["customobject"];
      });
     }); */
     let fileName = $.now(); 
     this.externalApi.generateJSONFile(this.config.dataSetArrForRPA,fileName).subscribe((data: {}) => {
       console.log('Data from API: ',data);
     }); 
   /*  var ticketData = { user_id: localStorage.p2c_fcaHash, ticket_num :'FCATK-123456', status: '2', notify:'1' }
    this.api.generateTicketapi(JSON.stringify(ticketData)).subscribe((data: {}) => {
     console.log('Ticket Generated .!',data);
     alert('Dummy Ticket Generated .!\n Ticket No.: '+ticketData.ticket_num);
    }); */
  }
   sendMessageToVA()
  {
    /* var vaMessage = {
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
          language: "IT"
      }, 
      iFrameVASize:
      {
          height: "500px",
          width: "500px",
          class: "vaclass"
      }
  }
    //receiver.postMessage('Hello VA!', '*');
        window.frames[1].postMessage(vaMessage, '*'); */
  }
  changeIframeWidth(iframeSize)
  {
    this.iframeSize = iframeSize;
  }
}
