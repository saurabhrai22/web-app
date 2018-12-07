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
var RichtextEditorComponent = /** @class */ (function () {
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
    function RichtextEditorComponent(config) {
        this.config = config;
        this.emitUpdateValue = new EventEmitter();
    }
    Object.defineProperty(RichtextEditorComponent.prototype, "setValues", {
        set: function (richTextObject) {
            this.key = richTextObject.key;
            this.oldValue = $($.parseHTML(richTextObject.htmldata)).html();
            this.oldDOM = richTextObject.htmldata;
            document.getElementById('p2cdatahtml').innerHTML = $($.parseHTML(richTextObject.htmldata)).html();
        },
        enumerable: true,
        configurable: true
    });
    RichtextEditorComponent.prototype.ngOnInit = function () {
        $('#p2cdatahtml').froalaEditor({
            enter: $.FroalaEditor.ENTER_BR,
            charCounterCount: false,
            colorsText: ['#000000', '#ffffff'],
            colorsBackground: ['none'],
            toolbarButtons: ['bold', 'italic', 'underline', '|', 'subscript', 'superscript', 'specialCharacters', '|', 'color', 'my_dropdown', '|', 'html', '|', 'fullscreen'],
            toolbarButtonsXS: ['bold', 'italic', 'underline', 'subscript', 'superscript', 'specialCharacters', 'paragraphFormat', 'html', 'fullscreen'],
            toolbarButtonsSM: ['bold', 'italic', 'underline', 'subscript', 'superscript', 'specialCharacters', 'paragraphFormat', 'html', 'fullscreen'],
            toolbarButtonsMD: ['bold', 'italic', 'underline', 'subscript', 'superscript', 'specialCharacters', 'paragraphFormat', 'html', 'fullscreen'],
        });
    };
    RichtextEditorComponent.prototype.SubmitVal = function () {
        this.newDOM = ($($.parseHTML(this.oldDOM)).html($('#p2cdatahtml').froalaEditor('html.get')))[0].outerHTML;
        this.newValue = ($($.parseHTML(this.oldDOM)).html($('#p2cdatahtml').froalaEditor('html.get')))[0].innerHTML;
        var metaDataFromIframe = this.config.metaDataFromIframe;
        var dataSetArrForRPA = this.config.dataSetArrForRPA;
        var keyOfElement = metaDataFromIframe.p2cresourcemetadata[metaDataFromIframe["p2cdata"]].key;
        var searchedIndex = this.config.searchInDatasetArr(metaDataFromIframe.p2cresource, dataSetArrForRPA);
        var richTextEditorCompData = {
            "oldvalue": this.oldValue,
            "newvalue": this.newValue,
            "customobject": {
                "p2cdata": metaDataFromIframe["p2cdata"],
                "type": "richtext",
                "oldDOM": this.oldDOM,
                "newDOM": this.newDOM
            }
        };
        if (searchedIndex != undefined) {
            if (dataSetArrForRPA[searchedIndex]["update"][keyOfElement] != undefined) {
                richTextEditorCompData["oldvalue"] = dataSetArrForRPA[searchedIndex]["update"][keyOfElement]["oldvalue"];
                richTextEditorCompData["customobject"]["oldDOM"] = dataSetArrForRPA[searchedIndex]["update"][keyOfElement]["customobject"]["oldDOM"];
                richTextEditorCompData["newvalue"] = $('#p2cdatahtml').froalaEditor('html.get');
                richTextEditorCompData["customobject"]["newDOM"] = this.newDOM;
            }
        }
        this.emitUpdateValue.emit(richTextEditorCompData);
    };
    __decorate([
        Input('richTextObject'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], RichtextEditorComponent.prototype, "setValues", null);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], RichtextEditorComponent.prototype, "emitUpdateValue", void 0);
    RichtextEditorComponent = __decorate([
        Component({
            selector: 'app-richtext-editor',
            templateUrl: './richtext-editor.component.html',
            styleUrls: ['./richtext-editor.component.css']
        }),
        __metadata("design:paramtypes", [ConfigService])
    ], RichtextEditorComponent);
    return RichtextEditorComponent;
}());
export { RichtextEditorComponent };
//# sourceMappingURL=richtext-editor.component.js.map