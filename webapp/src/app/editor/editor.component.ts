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
      EditorComponent.prototype.editorType = "desktop";
      console.log("Image Component");
      console.log('Image comp: ',compData);
     // EditorComponent.editorType = compData['type'];
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
    /* this.p2cDataHtml = compData.p2cdatahtml
    this.p2cDataHtml = compData.p2cresourcemetadata */
    /* document.getElementById('p2cdatahtml').innerHTML = compData.p2cdatahtml;
    ;  */




    //EditorComponent.prototype.setValueToEditor(compData);


    
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
    //let fullCustAttr = '[data-p2c-resource="'+this.config.metaDataFromIframe.p2cresource+'"] ' +'[data-p2c="'+this.config.metaDataFromIframe.p2cdata+'"]';
    //let dataToSender = { fullcustattr : fullCustAttr , customobject : dataFromComp["customobject"] }
    let dataToSender1 ={source:"WA",event:"changeSingleDOM",data:dataFromComp["customobject"]} 
    //document.getElementsByTagName("iframe")[0]//[0].postMessage(JSON.stringify(dataToSender), '*');
    //window.frames[1].postMessage(JSON.stringify(dataToSender), '*');
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

    //EditorComponent.prototype.updatedData  = $('#p2cdatahtml').froalaEditor('html.get');
    //let updatedDataNew = EditorComponent.prototype.updatedData;
    //console.log('Updated html: ',$('#p2cdatahtml').froalaEditor('html.get'));
   /*  console.log('updatedDataNew: ',updatedDataNew)
    let fullCustAttr = '[data-p2c-resource="'+this.p2cResource+'"] ' +'[data-p2c="'+this.p2cData+'"]';
    let dataToSender = { fullcustattr : fullCustAttr , updateddata : updatedDataNew }
    console.log("Data b4 sending to iframe: ",dataToSender);
    window.frames[0].postMessage(JSON.stringify(dataToSender), '*'); */
   











    
    /* var dataSetArrForRPA =  this.config.dataSetArrForRPA;
    //HomeComponent comp = new HomeComponent.prototype();
    //console.log(this.compDataNew); 
    var metaDataFromIframe = this.config.metaDataFromIframe ;
    console.log('comp Smarty: ',metaDataFromIframe); 
    var dataSet = { pageurl: "http://www.fiat.it", p2cresource : metaDataFromIframe["p2cresource"], jcrContent: metaDataFromIframe["p2cresourcemetadata"]["resource"],  source: "aem", update: {} }
    let arr1 = { oldvalue : metaDataFromIframe.p2cdatahtml, newvalue : dataFromComp["newvalue"] };
    var newDataObject = metaDataFromIframe.p2cresourcemetadata[metaDataFromIframe["p2cdata"]].key;
    console.log('New Data Object: ',newDataObject);
    console.log('Data Set Object: ',dataSet);
    console.log('Searched Imdex: ',this.config.searchInDatasetArr(metaDataFromIframe.p2cresource,dataSetArrForRPA));
    var searchedIndex = this.config.searchInDatasetArr(metaDataFromIframe.p2cresource,dataSetArrForRPA)
    if( searchedIndex != undefined )
    {	
      if(dataSetArrForRPA[searchedIndex]["update"][newDataObject] != undefined){
        dataSetArrForRPA[searchedIndex]["update"][newDataObject]["newvalue"] =  dataFromComp["newvalue"] 
      }
      else{
        dataSetArrForRPA[searchedIndex]["update"][newDataObject] = arr1 ;
        //dataSet["update"][newDataObject] 
      }
      
    }
    else
    {
      dataSet["update"][newDataObject] = arr1;
      dataSetArrForRPA.push(dataSet);
    }
  //let fullCustAttr;
  let p2cResource =metaDataFromIframe.p2cresource
  let p2cData = metaDataFromIframe.p2cdata;
	fullCustAttr = '[data-p2c-resource="'+p2cResource+'"]';//[data-p2c="'+p2cData+'"]';
  let updatedData = $('#p2cdatahtml').froalaEditor('html.get');
  //let dataToSender = { fullcustattr : fullCustAttr , updateddata : updatedData }
  console.log('dataSetArr:  ',dataSetArrForRPA);
  window.frames[0].postMessage(JSON.stringify(dataToSender), '*');
  this.hideEditorDiv.emit(false);
  
  let fileName = $.now(); */
 /*   this.externalApi.generateJSONFile(dataSetArrForRPA,fileName).subscribe((data: {}) => {
    console.log('Data from API: ',data);
  });  */
  
  
  } 
  
}
