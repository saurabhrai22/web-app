import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConfigService } from '../config.service'
declare var $ :any;
@Component({
  selector: 'app-cta-editor',
  templateUrl: './cta-editor.component.html',
  styleUrls: ['./cta-editor.component.css']
})
export class CtaEditorComponent implements OnInit {
  public oldbuttonLabel:string;
  public newbuttonLabel:string;
  public oldbuttonLink:string;
  public newbuttonLink:string;
  public oldDOM:string;
  public newDOM:string;
  public key:string;
  @Input('ctaObject') set setValues(ctaObject){
    this.key = ctaObject.key;
    this.oldbuttonLabel = $($.parseHTML(ctaObject.htmldata)).find("span:first").text();
    this.newbuttonLabel = $($.parseHTML(ctaObject.htmldata)).find("span:first").text();
    this.oldbuttonLink = $($.parseHTML(ctaObject.htmldata)).attr("refhref");
    this.newbuttonLink = $($.parseHTML(ctaObject.htmldata)).attr("refhref");
    this.oldDOM = ctaObject.htmldata
  } 
  
  @Output() public emitUpdateValue = new EventEmitter();
  constructor(public config:ConfigService) { }

  ngOnInit() {
  }
 
  SubmitVal(){
    this.newDOM = $($.parseHTML(this.oldDOM)).find("span:first").text(this.newbuttonLabel).prevObject[0].outerHTML;
    this.newDOM = $($.parseHTML(this.newDOM)).attr("refhref",this.newbuttonLink)[0].outerHTML;
    var metaDataFromIframe = this.config.metaDataFromIframe;
    var dataSetArrForRPA = this.config.dataSetArrForRPA;
    var keyOfElement = metaDataFromIframe.p2cresourcemetadata[metaDataFromIframe["p2cdata"]].key
    var searchedIndex = this.config.searchInDatasetArr(metaDataFromIframe.p2cresource,dataSetArrForRPA)
    let ctaEditorCompData = {
      "oldbuttonlabel": this.oldbuttonLabel,
      "newbuttonlabel": this.newbuttonLabel,
      "oldbuttonlink": this.oldbuttonLink,
      "newbuttonlink": this.newbuttonLink,
      "customobject": {
        "p2cresource":metaDataFromIframe["p2cresource"],
        "p2cdata": metaDataFromIframe["p2cdata"],
        "type": "button",
        "oldDOM" :  this.oldDOM,
        "newDOM" :  this.newDOM
      } 
    }
    
    if( searchedIndex != undefined )
    {	
      if(dataSetArrForRPA[searchedIndex]["update"][keyOfElement] != undefined){
        ctaEditorCompData["oldbuttonlabel"] =  dataSetArrForRPA[searchedIndex]["update"][keyOfElement]["oldbuttonlabel"];
        ctaEditorCompData["oldbuttonlink"] =  dataSetArrForRPA[searchedIndex]["update"][keyOfElement]["oldbuttonlink"];
        ctaEditorCompData["customobject"]["oldDOM"] = dataSetArrForRPA[searchedIndex]["update"][keyOfElement]["customobject"]["oldDOM"];
        ctaEditorCompData["newbuttonlabel"] =  this.newbuttonLabel;
        ctaEditorCompData["newbuttonlink"] =  this.newbuttonLink;
        ctaEditorCompData["customobject"]["newDOM"] = this.newDOM;
      }
    }
    this.emitUpdateValue.emit(ctaEditorCompData);
  }

}
