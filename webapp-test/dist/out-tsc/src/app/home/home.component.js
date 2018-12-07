var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { ConfigService } from '../config.service';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(externalApi, router, config) {
        this.externalApi = externalApi;
        this.router = router;
        this.config = config;
        this.chatDivShow = false;
        this.editorDivShow = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editorDivShow = false;
        if (localStorage.p2c_fcaHash == undefined) {
            this.router.navigate(['/login']);
        }
        this.url = "https://auth-dev6b2c.emea.fcagroup.com/content/fiat/fiat-it/it/home.html?wcmmode=disabled";
        //this.url = "http://localhost:3000/pages/fiat_new.html";
        window.addEventListener('message', function (evt) {
            if (_this.config.checkTypeOf(evt.data).match('string')) {
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
            else if (_this.config.checkTypeOf(evt.data).match('object')) {
                //console.log('Object iframe: ',evt.data);
                var vaMessage = evt.data;
                if (Object.keys(vaMessage).includes("source")) {
                    if (vaMessage["source"] == "iframe") {
                        var waResponsetoVa = {
                            source: "WA",
                            event: "wa_init_response",
                            data: {
                                userInfo: {
                                    firstName: "John",
                                    lastName: "Smith",
                                    companyId: "123456",
                                    email: "john.smith@accenture.com"
                                },
                                brandDetails: {
                                    market: "IT",
                                    brand: "FIAT",
                                    language: "english"
                                }
                            }
                        };
                        waResponsetoVa.data["metadata"] = vaMessage.newCanvasMetadata;
                        console.log("waResponsetoVa", waResponsetoVa);
                        $.each(document.getElementsByTagName("iframe"), function (index, data) {
                            if (data.id == "chatbot-frame") {
                                window.frames[index].postMessage(waResponsetoVa, '*');
                            }
                        });
                    }
                    else if (vaMessage["source"] == "VA") {
                        console.log("vaMessage: ", vaMessage);
                        if (vaMessage["event"] == "va_init") {
                            $.each(document.getElementsByTagName("iframe"), function (index, data) {
                                if (data.id == "main-iframe-id") {
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
    };
    HomeComponent.prototype.searchInDatasetArr = function (val1, myArray) {
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i].p2cresource == val1) {
                return i;
            }
        }
    };
    HomeComponent.prototype.showEditorDiv = function (dataFromIframe) {
        //.split(':')[1].strip('{').strip('}')
        //.split(':')[1].strip('{').strip('}').match('richtext')
        //console.log('Element Identify: ', dataFromIframe["p2cresourceobject"][dataFromIframe.p2cdata].split(':')[1].replace('{','').replace('}',''))
        //console.log('Type of: ',this.config.checkTypeOf(dataFromIframe["p2cresourceobject"][dataFromIframe.p2cdata]));
        if (this.config.checkTypeOf(dataFromIframe["p2cresourcemetadata"][dataFromIframe.p2cdata]).match('string')) { /*
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
        else if (this.config.checkTypeOf(dataFromIframe["p2cresourcemetadata"][dataFromIframe.p2cdata]).match('object')) {
            this.compData = dataFromIframe["p2cresourcemetadata"][dataFromIframe.p2cdata];
            console.log('Comp Data: ', this.compData);
            console.log("Key : ", dataFromIframe["p2cresourcemetadata"][dataFromIframe.p2cdata]["key"]);
            console.log("Type : ", dataFromIframe["p2cresourcemetadata"][dataFromIframe.p2cdata]["type"]);
            console.log("Value : ", dataFromIframe["p2cresourcemetadata"][dataFromIframe.p2cdata]["value"]);
            this.config.metaDataFromIframe = dataFromIframe;
            //this.config.metaDataFromIframe = $($.parseHTML(dataFromIframe["p2cresourcemetadata"][dataFromIframe.p2cdata]["value"]));
            //console.log('Parsed HTML: ',this.config.metaDataFromIframe);
            //console.log(this.config.htmlFromIframe.find(dataFromIframe["p2cresourcemetadata"][dataFromIframe["p2cdata"]])[0].outerHTML);
            this.editorDivShow = true;
        }
    };
    HomeComponent.prototype.closeEditorDiv = function (boolVal) {
        this.editorDivShow = boolVal;
    };
    HomeComponent.prototype.showChatDiv = function () {
        this.chatDivShow = true;
    };
    HomeComponent.prototype.generateTiciet = function (send) {
        this.config.dataSetArrForRPA.forEach(function (element) {
            console.log('element', element["update"]);
            Object.keys(element["update"]).forEach(function (keys) {
                delete element["update"][keys]["customobject"];
            });
        });
        var fileName = $.now();
        this.externalApi.generateJSONFile(this.config.dataSetArrForRPA, fileName).subscribe(function (data) {
            console.log('Data from API: ', data);
        });
        /*  var ticketData = { user_id: localStorage.p2c_fcaHash, ticket_num :'FCATK-123456', status: '2', notify:'1' }
         this.api.generateTicketapi(JSON.stringify(ticketData)).subscribe((data: {}) => {
          console.log('Ticket Generated .!',data);
          alert('Dummy Ticket Generated .!\n Ticket No.: '+ticketData.ticket_num);
         }); */
    };
    HomeComponent.prototype.sendMessageToVA = function () {
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
    };
    HomeComponent.prototype.changeIframeWidth = function (iframeSize) {
        this.iframeSize = iframeSize;
    };
    HomeComponent = __decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [ApiService, Router, ConfigService])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map