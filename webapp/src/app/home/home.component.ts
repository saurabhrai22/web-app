import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { ConfigService } from '../config.service';

declare var $: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  url: String;
  public chatDivShow: boolean = false;
  public editorDivShow = false;
  public notificationDivShow = false;
  public cartDivShow = false;
  public iframeSize;
  public compData;
  public notificationIcon = "../assets/images/Notification_OFF.SVG";
  public cartIcon = "../assets/images/Shopping_OFF.SVG";
  constructor(public externalApi: ApiService, public router: Router, public config: ConfigService) {}

  ngOnInit() {

      this.editorDivShow = false;
      if (localStorage.p2c_fcaHash == undefined) {
          this.router.navigate(['/login']);
      }
      //this.url = "https://auth-dev6b2c.emea.fcagroup.com/content/fiat/fiat-it/it/home.html?wcmmode=disabled";
      this.url = "http://localhost:3000/metatag_P2C.html";
    //   this.url = "https://test-webapp-basefile.azurewebsites.net/fiat_new.html";
      window.addEventListener('message', (evt) => {

          if (this.config.checkTypeOf(evt.data).match('string')) {

          } else if (this.config.checkTypeOf(evt.data).match('object')) {

              var vaMessage = evt.data;
              if (Object.keys(vaMessage).includes("source")) {
                  if (vaMessage["source"] == "dpromo_sender") {
                      if (vaMessage["event"] == "newCanvasData") {
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
                          }
                          waResponsetoVa.data["metadata"] = vaMessage.newCanvasMetadata;
                          console.log("waResponsetoVa", waResponsetoVa);
                          $.each(document.getElementsByTagName("iframe"), function(index, data) {
                              if (data.id == "chatbot-frame") {
                                  window.frames[index].postMessage(waResponsetoVa, '*');
                              }
                          });

                      }
                  } else if (vaMessage["source"] == "VA") {
                      console.log("vaMessage: ", vaMessage);
                      if (vaMessage["event"] == "va_init") {
                          $.each(document.getElementsByTagName("iframe"), function(index, data) {
                              if (data.id == "main-iframe-id") {
                                  window.frames[index].postMessage("getNewCanvas", '*');
                              }
                          });




                      }

                  }
              }
          }
      });
  }

  searchInDatasetArr(val1, myArray) {
      for (var i = 0; i < myArray.length; i++) {
          if (myArray[i].p2cresource == val1) {
              return i;
          }
      }

  }


  showEditorDiv(dataFromIframe) {
      if (this.config.checkTypeOf(dataFromIframe["p2cresourcemetadata"][dataFromIframe.p2cdata]).match('string')) {

      } else if (this.config.checkTypeOf(dataFromIframe["p2cresourcemetadata"][dataFromIframe.p2cdata]).match('object')) {
          this.compData = dataFromIframe["p2cresourcemetadata"][dataFromIframe.p2cdata];
          console.log('Comp Data: ', this.compData);
          console.log("Key : ", dataFromIframe["p2cresourcemetadata"][dataFromIframe.p2cdata]["key"]);
          console.log("Type : ", dataFromIframe["p2cresourcemetadata"][dataFromIframe.p2cdata]["type"]);
          console.log("Value : ", dataFromIframe["p2cresourcemetadata"][dataFromIframe.p2cdata]["value"]);
          this.config.metaDataFromIframe = dataFromIframe;
          this.editorDivShow = true;
      }
  }
  closeEditorDiv(boolVal) {
      this.editorDivShow = boolVal;
  }
  showChatDiv() {
      this.chatDivShow = true;
  }
  submitChanges() {

      let fileName = $.now();
      this.externalApi.generateJSONFile(this.config.dataSetArrForRPA, fileName).subscribe((generateJSONFileRes: {}) => {
          if (generateJSONFileRes["status"] == "success") {
              this.externalApi.generateTicketApi({
                  ticketDetails: "string"
              }).subscribe((generateTicketApiRes: {}) => {
                  if (generateTicketApiRes["status"] == "success") {
                      this.externalApi.uploadFileToJira(generateTicketApiRes["data"]["key"], "public/json/" + fileName + ".json").subscribe((uploadFileToJiraData: {}) => {
                          if (generateTicketApiRes["status"] == "success") {
                              this.externalApi.changeTicketStatusInJira({
                                  data: {
                                      ticketNum: generateTicketApiRes["data"]["key"],
                                      status: "Req Completed"
                                  }
                              }).subscribe((changeTicketStatusInJiraRes: {}) => {
                                  console.log("changeTicketStatusInJiraRes", changeTicketStatusInJiraRes);
                                  if (changeTicketStatusInJiraRes["status"] == "success") {
                                      this.externalApi.userCheck(localStorage.getItem("p2c_fcaHash")).subscribe((userCheckRes: {}) => {
                                          console.log('userCheckRes: ', userCheckRes["ID"]);
                                          var addNewTicketDetails = {
                                              UserId: userCheckRes["ID"],
                                              TicketNum: generateTicketApiRes["data"]["key"],
                                              StatusID: "1",
                                              Flag: "false",
                                              Timestamp: "2018-12-10T12:27:10+05:30",
                                              PreviewURL: "",
                                              LiveURL: "",
                                              NotificationSeen: "false"
                                          }
                                          this.externalApi.addNewTicketToDB(addNewTicketDetails).subscribe((addNewTicketToDBRes: {}) => {
                                              console.log("addNewTicketToDBRes: ", addNewTicketToDBRes);
                                              alert("New Ticket has been created, we will get back to you soon.\nTicket No: " + generateTicketApiRes["data"]["key"]);
                                          });
                                      });
                                  }
                              });
                          }
                      });
                  }

              });
          }
      });
  }

  changeIframeWidth(iframeSize) {
      this.iframeSize = iframeSize;
  }
  reloadiFrameforVA(data) {
      this.url = data["data"]["url"];
  }

  showNotificationDiv(val) {
      this.notificationDivShow = val;
      if (this.notificationDivShow == true) {
          this.notificationIcon = "../assets/images/Notification_ON.SVG";
      } else {
          this.notificationIcon = "../assets/images/Notification_OFF.SVG";
      }

  }

  showCartDiv(val1) {
      this.cartDivShow = val1;
      if (this.cartDivShow == true) {
          this.cartIcon = "../assets/images/Shopping_ON.SVG";
      } else {
          this.cartIcon = "../assets/images/Shopping_OFF.SVG";
      }
  }
}