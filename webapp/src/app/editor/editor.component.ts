import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConfigService } from '../config.service'
import { ApiService } from '../api.service'
import { isFormattedError, core } from '@angular/compiler';
import { HomeComponent } from '../home/home.component'
declare var $:any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})


export class EditorComponent implements OnInit {
  public p2cData:any;
  public compDataNew:any;
  public editorTitle:any;
  public editorType:any;
  public getValueFlag:boolean = false; 
  public compObject:object;
  public keyOfElement:string;
  @Input('compData') set setValueToEditor(compData:any){

    
    EditorComponent.prototype.p2cData = this.config.metaDataFromIframe.p2cdata;
    EditorComponent.prototype.compDataNew = compData;
    EditorComponent.prototype.editorType = compData['type'];
    EditorComponent.prototype.editorTitle = this.p2cData.split('_')[1];

    
    console.log('Image comp: ',compData);
    
    if(Object.keys(compData).includes("type")){

      if(compData['type'] == "text"){
        EditorComponent.prototype.keyOfElement = this.config.metaDataFromIframe.p2cresourcemetadata[this.config.metaDataFromIframe["p2cdata"]].key
        EditorComponent.prototype.editorType = compData['type'];
        EditorComponent.prototype.compObject = {
          "key": compData['type'],
          "htmldata": this.config.metaDataFromIframe.p2cdatahtml
        }
        console.log("Text Component");
      }
      else if(compData['type'] == "richtext"){
        console.log("Richtext Component");
        EditorComponent.prototype.keyOfElement = this.config.metaDataFromIframe.p2cresourcemetadata[this.config.metaDataFromIframe["p2cdata"]].key
        EditorComponent.prototype.editorType = compData['type'];
        EditorComponent.prototype.editorTitle = this.p2cData.split('_')[1];
        EditorComponent.prototype.compObject = {
          "key": compData['type'],
          "htmldata": this.config.metaDataFromIframe.p2cdatahtml
        }
      
      }
    }
    else if(Object.keys(compData).includes("desktop")){
      EditorComponent.prototype.editorType = "desktop";
      console.log("Image Component");
      console.log('Image comp: ',compData);

    }
    else if(Object.keys(compData).includes("p2c_label")){
      EditorComponent.prototype.keyOfElement = this.config.metaDataFromIframe.p2cresourcemetadata[this.config.metaDataFromIframe["p2cdata"]]["p2c_label"].key
      EditorComponent.prototype.editorType = "p2c_label";
      console.log('p2c_label: ',compData["p2c_label"]);
      EditorComponent.prototype.compObject = {
        "key": compData['p2c_label']['type'],
        "htmldata": this.config.metaDataFromIframe.p2cdatahtml
      }
      console.log("CTA Component");
    }
  };
  @Output() hideEditorDiv = new EventEmitter();
  @Output() submitNewChanges = new EventEmitter();
  constructor(public config:ConfigService, public externalApi:ApiService) { }

  
  ngOnInit() {
    console.log('dataSetArrForRPA: ',this.config.dataSetArrForRPA);
  }

  
  SubmitVal(dataFromComp){
    console.log('EditorComponent.prototype.keyOfElement: ',EditorComponent.prototype.keyOfElement);
    //This will send data to iframe 
    let dataToSender1 = { source: "WA",event: "changeSingleDOM", data: dataFromComp["customobject"] } 
    $.each(document.getElementsByTagName("iframe"),function(index,data){
      if(data.id == "main-iframe-id")
      {
        window.frames[index].postMessage(dataToSender1, '*');
      }
      else{
        console.log('Iframe not matched..!');
      }
    });
    
    
    var metaDataFromIframe = this.config.metaDataFromIframe;
    var dataSetArrForRPA = this.config.dataSetArrForRPA;
    var keyOfElement = EditorComponent.prototype.keyOfElement;
    var dataSet = { pageurl: localStorage.getItem("p2c_url") , p2cresource : metaDataFromIframe["p2cresource"], jcrContent: metaDataFromIframe["p2cresourcemetadata"]["resource"],  source: "aem", update: {} }
    var searchedIndex = this.config.searchInDatasetArr(metaDataFromIframe.p2cresource,dataSetArrForRPA)

    if( searchedIndex != undefined )
    {	
        dataSetArrForRPA[searchedIndex]["update"][keyOfElement] = dataFromComp ;
    }
     else
    {
      dataSet["update"][keyOfElement] = dataFromComp;
      dataSetArrForRPA.push(dataSet);
    }
    console.log("dataSetArrForRPA Editor Comp: ",dataSetArrForRPA);
   
    this.hideEditorDiv.emit(false);
    this.submitNewChanges.emit("send"); 
  } 
  
}
