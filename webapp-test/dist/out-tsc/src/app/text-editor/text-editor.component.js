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
var TextEditorComponent = /** @class */ (function () {
    function TextEditorComponent(config) {
        this.config = config;
        this.emitUpdateValue = new EventEmitter();
    }
    Object.defineProperty(TextEditorComponent.prototype, "setValues", {
        set: function (textObject) {
            this.key = textObject.key;
            this.oldValue = $($.parseHTML(textObject.htmldata)).text();
            this.newValue = $($.parseHTML(textObject.htmldata)).text();
            this.oldDOM = textObject.htmldata;
        },
        enumerable: true,
        configurable: true
    });
    TextEditorComponent.prototype.ngOnInit = function () {
    };
    TextEditorComponent.prototype.SubmitVal = function () {
        this.newDOM = ($($.parseHTML(this.oldDOM)).text(this.newValue))[0].outerHTML;
        var metaDataFromIframe = this.config.metaDataFromIframe;
        var dataSetArrForRPA = this.config.dataSetArrForRPA;
        var keyOfElement = metaDataFromIframe.p2cresourcemetadata[metaDataFromIframe["p2cdata"]].key;
        var searchedIndex = this.config.searchInDatasetArr(metaDataFromIframe.p2cresource, dataSetArrForRPA);
        var textEditorCompData = {
            "oldvalue": this.oldValue,
            "newvalue": this.newValue,
            "customobject": {
                "p2cdata": metaDataFromIframe["p2cdata"],
                "type": "text",
                "oldDOM": this.oldDOM,
                "newDOM": this.newDOM
            }
        };
        if (searchedIndex != undefined) {
            if (dataSetArrForRPA[searchedIndex]["update"][keyOfElement] != undefined) {
                textEditorCompData["oldvalue"] = dataSetArrForRPA[searchedIndex]["update"][keyOfElement]["oldvalue"];
                textEditorCompData["customobject"]["oldDOM"] = dataSetArrForRPA[searchedIndex]["update"][keyOfElement]["customobject"]["oldDOM"];
                textEditorCompData["newvalue"] = this.newValue;
                textEditorCompData["customobject"]["newDOM"] = this.newDOM;
            } /*
            else{
              dataSetArrForRPA[searchedIndex]["update"][keyOfElement] = textEditorCompData ;
            } */
        }
        /*  else
         {
           dataSet["update"][keyOfElement] = textEditorCompData;
           dataSetArrForRPA.push(dataSet);
         } */
        this.emitUpdateValue.emit(textEditorCompData);
    };
    __decorate([
        Input('textObject'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TextEditorComponent.prototype, "setValues", null);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TextEditorComponent.prototype, "emitUpdateValue", void 0);
    TextEditorComponent = __decorate([
        Component({
            selector: 'app-text-editor',
            templateUrl: './text-editor.component.html',
            styleUrls: ['./text-editor.component.css']
        }),
        __metadata("design:paramtypes", [ConfigService])
    ], TextEditorComponent);
    return TextEditorComponent;
}());
export { TextEditorComponent };
//# sourceMappingURL=text-editor.component.js.map