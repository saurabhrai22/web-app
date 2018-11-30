import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConfigService } from '../config.service'
import { ApiService } from '../api.service'
import { isFormattedError } from '@angular/compiler';
declare var $:any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})


export class EditorComponent implements OnInit {
  public p2cSettings:any ;
  public p2cResource:any ;
  public p2cData:any ;
  public p2cDataHtml:any ;
  public compDataNew:any;
  public editorTitle:any;
  public editorType:any;
  
  @Input('compData') set compData(compData:any){
    this.compDataNew = compData;
    EditorComponent.prototype.p2cData = this.config.metaDataFromIframe.p2cdata;
    EditorComponent.prototype.p2cResource = this.config.metaDataFromIframe.p2cresource;
    EditorComponent.prototype.editorType = compData['type'];
    EditorComponent.prototype.editorTitle = this.p2cData.split('_')[1];
    //console.log('From Input: ',this.p2cData);
   // EditorComponent.prototype.setValueToEditor(compData);
    
  };
  @Output() hideEditorDiv = new EventEmitter();
  @Output() generateTicket = new EventEmitter();
  constructor(public config:ConfigService, public externalApi:ApiService) { }

  
  ngOnInit() {
  }

  setValueToEditor(compData)  {

    if(Object.keys(compData).includes("type")){
      console.log('Set Editor: ',this.p2cData);
      if(compData['type'] == "text"){
        EditorComponent.prototype.editorType = compData['type'];
        console.log("Text Component");
        console.log('Key: ', compData['key']);
        console.log('Type: ', compData['type']);
        console.log('Value: ', compData['value']);
      }
      else if(compData['type'] == "richtext"){
        console.log("Richtext Component");
        EditorComponent.prototype.editorType = compData['type'];
        EditorComponent.prototype.editorTitle = this.p2cData.split('_')[1];
       /*  document.getElementById('p2cdatahtml').innerHTML = compData['value'];
        $('#p2cdatahtml').froalaEditor({
          enter: $.FroalaEditor.ENTER_BR,
          charCounterCount:false,
          colorsText: ['#000000', '#ffffff'],
          colorsBackground: ['none'],
          toolbarButtons: ['bold', 'italic', 'underline','|', 'subscript', 'superscript', 'specialCharacters', '|','color','my_dropdown','|','html','|','fullscreen'],
          toolbarButtonsXS: ['bold', 'italic', 'underline', 'subscript', 'superscript', 'specialCharacters', 'paragraphFormat','html','fullscreen'],
          toolbarButtonsSM: ['bold', 'italic', 'underline', 'subscript', 'superscript', 'specialCharacters', 'paragraphFormat','html','fullscreen'],
          toolbarButtonsMD: ['bold', 'italic', 'underline', 'subscript', 'superscript', 'specialCharacters', 'paragraphFormat','html','fullscreen'],
          }); */
      }
    }
    else if(Object.keys(compData).includes("desktop")){
      console.log("Image Component");
    }
    else if(Object.keys(compData).includes("p2c_label")){
      console.log("CTA Component");
    }
    /* this.p2cDataHtml = compData.p2cdatahtml
    this.p2cDataHtml = compData.p2cresourcemetadata */
    /* document.getElementById('p2cdatahtml').innerHTML = compData.p2cdatahtml;
    ;  */

  }
  SubmitVal(){
    let updatedData  = $('#p2cdatahtml').froalaEditor('html.get');
    //console.log('Updated html: ',$('#p2cdatahtml').froalaEditor('html.get'));
    let fullCustAttr = '[data-p2c-resource="'+this.p2cResource+'"] ' +'[data-p2c="'+this.p2cData+'"]';
    let dataToSender = { fullcustattr : fullCustAttr , updateddata : updatedData }
    console.log("Data b4 sending to iframe: ",dataToSender);
    window.frames[0].postMessage(JSON.stringify(dataToSender), '*');
    this.hideEditorDiv.emit(false);
    /* 
    var dataSetArr =  this.config.dataSetArr;
    //HomeComponent comp = new HomeComponent.prototype();
    console.log(this.compDataNew);
    var dataSet = { pageurl: "http://www.fiat.it", p2cresource : this.compDataNew.p2cresource, jcrContent: this.compDataNew.p2cresourceobject.resource,  source: "aem", p2csettings : this.compDataNew.p2csettings, update: {} }
    let arr1 = { oldvalue : this.compDataNew.p2cdatahtml, newvalue : $('#p2cdatahtml').froalaEditor('html.get') };
    var newDataObject = this.compDataNew.p2cresourceobject[this.compDataNew.p2cdata].split(':')[0];
    console.log('New Data Object: ',newDataObject);
  console.log('Data Set Object: ',dataSet);
  console.log('Searched Imdex: ',EditorComponent.prototype.searchInDatasetArr(this.compDataNew.p2cresource,dataSetArr));
  var searchedIndex = EditorComponent.prototype.searchInDatasetArr(this.compDataNew.p2cresource,dataSetArr)
  if( searchedIndex != undefined )
  {	
    if(dataSetArr[searchedIndex]["update"][newDataObject] != undefined){
      dataSetArr[searchedIndex]["update"][newDataObject]["newvalue"] = $('#p2cdatahtml').froalaEditor('html.get');
    }
    else{
      dataSetArr[searchedIndex]["update"][newDataObject] = arr1 ;
      //dataSet["update"][newDataObject] 
    }
    
  }
  else
  {
    dataSet["update"][newDataObject] = arr1;
    dataSetArr.push(dataSet);
  }
  let fullCustAttr;
  let p2cResource =this.compDataNew.p2cresource
  let p2cData = this.compDataNew.p2cdata;
	fullCustAttr = '[data-p2c-resource="'+p2cResource+'"]';//[data-p2c="'+p2cData+'"]';
  let updatedData = $('#p2cdatahtml').froalaEditor('html.get');
  let dataToSender = { fullcustattr : fullCustAttr , updateddata : updatedData }
  console.log('dataSetArr:  ',dataSetArr);
  window.frames[0].postMessage(JSON.stringify(dataToSender), '*');
  this.hideEditorDiv.emit(false);
  
  let fileName = $.now();
  this.externalApi.generateJSONFile(dataSetArr,fileName).subscribe((data: {}) => {
    console.log('Data from API: ',data);
  });
  
  console.log('Length of update: ',dataSetArr[0]["update"].hasOwnProperty.length);
  console.log('keys of object: ',Object.keys(dataSetArr[0]["update"])[0]);
  console.log('Type of : ',typeof dataSetArr[0]["update"] );
  //console.log('keys of update: ',dataSetArr["update"].key);
  this.generateTicket.emit("send"); */
  } 
  searchInDatasetArr(val1 , myArray){
	
    for (var i=0; i < myArray.length ; i++) {
        if (myArray[i].p2cresource == val1) {
            return i;
        }
    }
	
}
}
