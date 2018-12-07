import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConfigService } from '../config.service';
declare var $:any;
@Component({
  selector: 'app-richtext-editor',
  templateUrl: './richtext-editor.component.html',
  styleUrls: ['./richtext-editor.component.css']
})
export class RichtextEditorComponent implements OnInit {
  public newValue:string ;
  public oldValue:string;
  public oldDOM:string;
  public newDOM:string;
  public key:string;
  @Input('richTextObject') set setValues(richTextObject){
    this.key = richTextObject.key;
    this.oldValue = $($.parseHTML(richTextObject.htmldata)).html();
    this.oldDOM = richTextObject.htmldata
    document.getElementById('p2cdatahtml').innerHTML = $($.parseHTML(richTextObject.htmldata)).html();
  } 
  @Output() public emitUpdateValue = new EventEmitter();
  /* 
  @Input('textObject')  textObject:any;
  @Output() public emitUpdateValue = new EventEmitter(); */
 /*  @Input('getvalue') set getUpdatedValue(updatedValue){
    console.log('Consoled: ',updatedValue);
    if(updatedValue)
    {
      RichtextEditorComponent.prototype.emitUpdateValue.emit($('#p2cdatahtml').froalaEditor('html.get'));
    }
    
  } */
  
  constructor(public config:ConfigService) { }

  ngOnInit() {
        $('#p2cdatahtml').froalaEditor({
          enter: $.FroalaEditor.ENTER_BR,
          charCounterCount:false,
          colorsText: ['#000000', '#ffffff'],
          colorsBackground: ['none'],
          toolbarButtons: ['bold', 'italic', 'underline','|', 'subscript', 'superscript', 'specialCharacters', '|','color','my_dropdown','|','html','|','fullscreen'],
          toolbarButtonsXS: ['bold', 'italic', 'underline', 'subscript', 'superscript', 'specialCharacters', 'paragraphFormat','html','fullscreen'],
          toolbarButtonsSM: ['bold', 'italic', 'underline', 'subscript', 'superscript', 'specialCharacters', 'paragraphFormat','html','fullscreen'],
          toolbarButtonsMD: ['bold', 'italic', 'underline', 'subscript', 'superscript', 'specialCharacters', 'paragraphFormat','html','fullscreen'],
          });
  }

  SubmitVal(){
    this.newDOM = ($($.parseHTML(this.oldDOM)).html($('#p2cdatahtml').froalaEditor('html.get')))[0].outerHTML;
    this.newValue = ($($.parseHTML(this.oldDOM)).html($('#p2cdatahtml').froalaEditor('html.get')))[0].innerHTML;
    var metaDataFromIframe = this.config.metaDataFromIframe;
    var dataSetArrForRPA = this.config.dataSetArrForRPA;
    var keyOfElement = metaDataFromIframe.p2cresourcemetadata[metaDataFromIframe["p2cdata"]].key
    var searchedIndex = this.config.searchInDatasetArr(metaDataFromIframe.p2cresource,dataSetArrForRPA)
    let richTextEditorCompData = {
      "oldvalue": this.oldValue,
      "newvalue": this.newValue,
      "customobject": {
        "p2cdata": metaDataFromIframe["p2cdata"],
        "type": "richtext",
        "oldDOM" :  this.oldDOM,
        "newDOM" :  this.newDOM
      } 
    }
    
    if( searchedIndex != undefined )
    {	
      if(dataSetArrForRPA[searchedIndex]["update"][keyOfElement] != undefined){
        richTextEditorCompData["oldvalue"] =  dataSetArrForRPA[searchedIndex]["update"][keyOfElement]["oldvalue"];
        richTextEditorCompData["customobject"]["oldDOM"] = dataSetArrForRPA[searchedIndex]["update"][keyOfElement]["customobject"]["oldDOM"];
        richTextEditorCompData["newvalue"] =  $('#p2cdatahtml').froalaEditor('html.get');
        richTextEditorCompData["customobject"]["newDOM"] = this.newDOM;
      }
    }


    this.emitUpdateValue.emit(richTextEditorCompData);
  }

}
