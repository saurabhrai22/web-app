import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-old-new-toggle',
  templateUrl: './old-new-toggle.component.html',
  styleUrls: ['./old-new-toggle.component.css']
})
export class OldNewToggleComponent implements OnInit {
  public changeVal:boolean = true;
  constructor(public config:ConfigService) { }

  ngOnInit() {
  }
  changeOldNew(){
    
    this.changeVal == !this.changeVal;
    if(this.changeVal == true){
      for (let index = 0; index < document.getElementsByTagName("iframe").length; index++) {
        var changeNewDOMData = { source: "WA", event: "changeNewDOM",data: this.config.dataSetArrForRPA} 
        if(document.getElementsByTagName("iframe")[index].id == "main-iframe-id"){
          window.frames[index].postMessage(changeNewDOMData, '*');
        }
      }
    }
    else if(this.changeVal == false){
      for (let index = 0; index < document.getElementsByTagName("iframe").length; index++) {
        var changeNewOldData = { source: "WA", event: "changeOldDOM",data: this.config.dataSetArrForRPA} 
        if(document.getElementsByTagName("iframe")[index].id == "main-iframe-id"){
          window.frames[index].postMessage(changeNewOldData, '*');
        }
      }
    }
  
  }
  


  showNewChanges(){
    //var arr = document.getElementsByTagName("iframe");
   
  }
  showOldChanges(){
   

  }
}
