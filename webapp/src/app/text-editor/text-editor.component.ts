import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConfigService } from '../config.service'
declare var $:any;
@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {
  public newValue:string ;
  public oldValue:string;
  public oldDOM:string;
  public newDOM:string;
  public key:string;
  @Input('textObject') set setValues(textObject){
    this.key = textObject.key;
    this.oldValue = $($.parseHTML(textObject.htmldata)).text();
    this.newValue = $($.parseHTML(textObject.htmldata)).text();
    this.oldDOM = textObject.htmldata
  } 
  @Output() public emitUpdateValue = new EventEmitter();
  constructor(public config:ConfigService) { }

  ngOnInit() {

  }

  SubmitVal(){
    this.newDOM = ($($.parseHTML(this.oldDOM)).text(this.newValue))[0].outerHTML;
    var metaDataFromIframe = this.config.metaDataFromIframe;
    var dataSetArrForRPA = this.config.dataSetArrForRPA;
    var keyOfElement = metaDataFromIframe.p2cresourcemetadata[metaDataFromIframe["p2cdata"]].key
    var searchedIndex = this.config.searchInDatasetArr(metaDataFromIframe.p2cresource,dataSetArrForRPA)
    let textEditorCompData = {
      "oldvalue": this.oldValue,
      "newvalue": this.newValue,
      "customobject": {
        "p2cresource":metaDataFromIframe["p2cresource"],
        "p2cdata": metaDataFromIframe["p2cdata"],
        "type": "text",
        "oldDOM" :  this.oldDOM,
        "newDOM" :  this.newDOM
      } 
    }
    
    if( searchedIndex != undefined )
    {	
      if(dataSetArrForRPA[searchedIndex]["update"][keyOfElement] != undefined){
        textEditorCompData["oldvalue"] =  dataSetArrForRPA[searchedIndex]["update"][keyOfElement]["oldvalue"];
        textEditorCompData["customobject"]["oldDOM"] = dataSetArrForRPA[searchedIndex]["update"][keyOfElement]["customobject"]["oldDOM"];
        textEditorCompData["newvalue"] =  this.newValue;
        textEditorCompData["customobject"]["newDOM"] = this.newDOM;
      }
    }
    this.emitUpdateValue.emit(textEditorCompData);
  }
}
