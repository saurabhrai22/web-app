import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HomeComponent } from '../home/home.component'
import { ConfigService } from '../config.service'
import { ApiService } from '../api.service'
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
  
  @Input('compData') set compData(compData:any){
    this.compDataNew = compData;
    EditorComponent.prototype.setValueToEditor(compData);
  };
  @Output() hideEditorDiv = new EventEmitter();
  @Output() generateTicket = new EventEmitter();
  constructor(public config:ConfigService, public externalApi:ApiService) { }

  
  ngOnInit() {
  }
  setValueToEditor(compData)  {
    this.p2cSettings = compData.p2csettings;
    this.p2cResource = compData.p2cresource
    this.p2cData = compData.p2cdata
    this.p2cDataHtml = compData.p2cdatahtml
    document.getElementById('p2cdatahtml').innerHTML = compData.p2cdatahtml;
    $('#p2cdatahtml').froalaEditor({
      charCounterCount:false,
      colorsText: ['#000000', '#ffffff'],
      colorsBackground: ['none'],
      toolbarButtons: ['bold', 'italic', 'underline','|', 'subscript', 'superscript', 'specialCharacters', '|','color','paragraphFormat','my_dropdown','|','html','|','fullscreen'],
      toolbarButtonsXS: ['bold', 'italic', 'underline', 'subscript', 'superscript', 'specialCharacters', 'paragraphFormat','html','fullscreen'],
      toolbarButtonsSM: ['bold', 'italic', 'underline', 'subscript', 'superscript', 'specialCharacters', 'paragraphFormat','html','fullscreen'],
      toolbarButtonsMD: ['bold', 'italic', 'underline', 'subscript', 'superscript', 'specialCharacters', 'paragraphFormat','html','fullscreen'],
      }); 

  }
  SubmitVal(){
    var dataSetArr =  this.config.dataSetArr;
    //HomeComponent comp = new HomeComponent.prototype();
    console.log(this.compDataNew);
    let arr1 = { oldvalue : this.compDataNew.p2cdatahtml, newvalue : $('#p2cdatahtml').froalaEditor('html.get') };
    var newDataObject = this.compDataNew.p2cresourceobject[this.compDataNew.p2cdata].split(':')[0];
    console.log('New Data Object: ',newDataObject);
  var dataSet = { pageurl: "http://www.fiat.it", p2cresource : this.compDataNew.p2cresource, jcrContent: this.compDataNew.p2cresourceobject.resource,  source: "aem", p2csettings : this.compDataNew.p2csettings, update: {} }
  console.log('Data Set Object: ',dataSet);
  var searchedIndex = EditorComponent.prototype.searchInDatasetArr(this.compDataNew.p2cResource,dataSetArr)
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
	fullCustAttr = '[data-p2c-resource="'+p2cResource+'"] [data-p2c="'+p2cData+'"]';
  let updatedData = $('#p2cdatahtml').froalaEditor('html.get');
  let dataToSender = { fullcustattr : fullCustAttr , updateddata : updatedData }
  console.log('dataSetArr:  ',dataSetArr);
  window.frames[0].postMessage(JSON.stringify(dataToSender), '*');
  this.hideEditorDiv.emit(false);
  
  let fileName = $.now();
  this.externalApi.generateJSONFile(dataSetArr,fileName).subscribe((data: {}) => {
    console.log('Data from API: ',data);
  });
  this.generateTicket.emit("send");
  } 
  searchInDatasetArr(val1 , myArray){
	
    for (var i=0; i < myArray.length ; i++) {
        if (myArray[i].p2cresource == val1) {
            return i;
        }
    }
	
}
}
