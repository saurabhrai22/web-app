var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ConfigService } from '../config.service';
import { ApiService } from '../api.service';
var EditorComponent = /** @class */ (function () {
    function EditorComponent(config, externalApi) {
        this.config = config;
        this.externalApi = externalApi;
        this.getValueFlag = false;
        this.hideEditorDiv = new EventEmitter();
        this.generateTicket = new EventEmitter();
    }
    EditorComponent_1 = EditorComponent;
    Object.defineProperty(EditorComponent.prototype, "setValueToEditor", {
        set: function (compData) {
            EditorComponent_1.prototype.p2cData = this.config.metaDataFromIframe.p2cdata;
            EditorComponent_1.prototype.compDataNew = compData;
            EditorComponent_1.prototype.editorType = compData['type'];
            EditorComponent_1.prototype.editorTitle = this.p2cData.split('_')[1];
            console.log('Image comp: ', compData);
            if (Object.keys(compData).includes("type")) {
                if (compData['type'] == "text") {
                    EditorComponent_1.prototype.keyOfElement = this.config.metaDataFromIframe.p2cresourcemetadata[this.config.metaDataFromIframe["p2cdata"]].key;
                    EditorComponent_1.prototype.editorType = compData['type'];
                    EditorComponent_1.prototype.compObject = {
                        "key": compData['type'],
                        "htmldata": this.config.metaDataFromIframe.p2cdatahtml
                    };
                    console.log("Text Component");
                }
                else if (compData['type'] == "richtext") {
                    console.log("Richtext Component");
                    EditorComponent_1.prototype.keyOfElement = this.config.metaDataFromIframe.p2cresourcemetadata[this.config.metaDataFromIframe["p2cdata"]].key;
                    EditorComponent_1.prototype.editorType = compData['type'];
                    EditorComponent_1.prototype.editorTitle = this.p2cData.split('_')[1];
                    EditorComponent_1.prototype.compObject = {
                        "key": compData['type'],
                        "htmldata": this.config.metaDataFromIframe.p2cdatahtml
                    };
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
            else if (Object.keys(compData).includes("desktop")) {
                EditorComponent_1.prototype.editorType = "desktop";
                console.log("Image Component");
                console.log('Image comp: ', compData);
                // EditorComponent.editorType = compData['type'];
            }
            else if (Object.keys(compData).includes("p2c_label")) {
                EditorComponent_1.prototype.keyOfElement = this.config.metaDataFromIframe.p2cresourcemetadata[this.config.metaDataFromIframe["p2cdata"]]["p2c_label"].key;
                EditorComponent_1.prototype.editorType = "p2c_label";
                console.log('p2c_label: ', compData["p2c_label"]);
                EditorComponent_1.prototype.compObject = {
                    "key": compData['p2c_label']['type'],
                    "htmldata": this.config.metaDataFromIframe.p2cdatahtml
                };
                console.log("CTA Component");
            }
            /* this.p2cDataHtml = compData.p2cdatahtml
            this.p2cDataHtml = compData.p2cresourcemetadata */
            /* document.getElementById('p2cdatahtml').innerHTML = compData.p2cdatahtml;
            ;  */
            //EditorComponent.prototype.setValueToEditor(compData);
        },
        enumerable: true,
        configurable: true
    });
    ;
    EditorComponent.prototype.ngOnInit = function () {
        console.log('dataSetArrForRPA: ', this.config.dataSetArrForRPA);
    };
    EditorComponent.prototype.SubmitVal = function (dataFromComp) {
        console.log('EditorComponent.prototype.keyOfElement: ', EditorComponent_1.prototype.keyOfElement);
        //This will send data to iframe 
        var fullCustAttr = '[data-p2c-resource="' + this.config.metaDataFromIframe.p2cresource + '"] ' + '[data-p2c="' + this.config.metaDataFromIframe.p2cdata + '"]';
        var dataToSender = { fullcustattr: fullCustAttr, customobject: dataFromComp["customobject"] };
        //document.getElementsByTagName("iframe")[0]//[0].postMessage(JSON.stringify(dataToSender), '*');
        //window.frames[1].postMessage(JSON.stringify(dataToSender), '*');
        $.each(document.getElementsByTagName("iframe"), function (index, data) {
            if (data.id == "main-iframe-id") {
                window.frames[index].postMessage(JSON.stringify(dataToSender), '*');
            }
            else {
                console.log('Iframe not matched..!');
            }
        });
        var metaDataFromIframe = this.config.metaDataFromIframe;
        var dataSetArrForRPA = this.config.dataSetArrForRPA;
        var keyOfElement = EditorComponent_1.prototype.keyOfElement;
        var dataSet = { pageurl: localStorage.getItem("p2c_url"), p2cresource: metaDataFromIframe["p2cresource"], jcrContent: metaDataFromIframe["p2cresourcemetadata"]["resource"], source: "aem", update: {} };
        var searchedIndex = this.config.searchInDatasetArr(metaDataFromIframe.p2cresource, dataSetArrForRPA);
        if (searchedIndex != undefined) {
            dataSetArrForRPA[searchedIndex]["update"][keyOfElement] = dataFromComp;
        }
        else {
            dataSet["update"][keyOfElement] = dataFromComp;
            dataSetArrForRPA.push(dataSet);
        }
        console.log("dataSetArrForRPA Editor Comp: ", dataSetArrForRPA);
        this.hideEditorDiv.emit(false);
        this.generateTicket.emit("send");
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
    };
    var EditorComponent_1;
    __decorate([
        Input('compData'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], EditorComponent.prototype, "setValueToEditor", null);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], EditorComponent.prototype, "hideEditorDiv", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], EditorComponent.prototype, "generateTicket", void 0);
    EditorComponent = EditorComponent_1 = __decorate([
        Component({
            selector: 'app-editor',
            templateUrl: './editor.component.html',
            styleUrls: ['./editor.component.css']
        }),
        __metadata("design:paramtypes", [ConfigService, ApiService])
    ], EditorComponent);
    return EditorComponent;
}());
export { EditorComponent };
//# sourceMappingURL=editor.component.js.map