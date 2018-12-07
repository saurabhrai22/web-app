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
var CtaEditorComponent = /** @class */ (function () {
    function CtaEditorComponent(config) {
        this.config = config;
        this.emitUpdateValue = new EventEmitter();
    }
    Object.defineProperty(CtaEditorComponent.prototype, "setValues", {
        set: function (ctaObject) {
            this.key = ctaObject.key;
            this.oldbuttonLabel = $($.parseHTML(ctaObject.htmldata)).find("span:first").text();
            this.newbuttonLabel = $($.parseHTML(ctaObject.htmldata)).find("span:first").text();
            this.oldbuttonLink = $($.parseHTML(ctaObject.htmldata)).attr("refhref");
            this.newbuttonLink = $($.parseHTML(ctaObject.htmldata)).attr("refhref");
            this.oldDOM = ctaObject.htmldata;
        },
        enumerable: true,
        configurable: true
    });
    CtaEditorComponent.prototype.ngOnInit = function () {
    };
    CtaEditorComponent.prototype.SubmitVal = function () {
        this.newDOM = $($.parseHTML(this.oldDOM)).find("span:first").text(this.newbuttonLabel).prevObject[0].outerHTML;
        this.newDOM = $($.parseHTML(this.newDOM)).attr("refhref", this.newbuttonLink)[0].outerHTML;
        var metaDataFromIframe = this.config.metaDataFromIframe;
        var dataSetArrForRPA = this.config.dataSetArrForRPA;
        var keyOfElement = metaDataFromIframe.p2cresourcemetadata[metaDataFromIframe["p2cdata"]].key;
        var searchedIndex = this.config.searchInDatasetArr(metaDataFromIframe.p2cresource, dataSetArrForRPA);
        var ctaEditorCompData = {
            "oldbuttonlabel": this.oldbuttonLabel,
            "newbuttonlabel": this.newbuttonLabel,
            "oldbuttonlink": this.oldbuttonLink,
            "newbuttonlink": this.newbuttonLink,
            "customobject": {
                "p2cdata": metaDataFromIframe["p2cdata"],
                "type": "button",
                "oldDOM": this.oldDOM,
                "newDOM": this.newDOM
            }
        };
        if (searchedIndex != undefined) {
            if (dataSetArrForRPA[searchedIndex]["update"][keyOfElement] != undefined) {
                ctaEditorCompData["oldbuttonlabel"] = dataSetArrForRPA[searchedIndex]["update"][keyOfElement]["oldbuttonlabel"];
                ctaEditorCompData["oldbuttonlink"] = dataSetArrForRPA[searchedIndex]["update"][keyOfElement]["oldbuttonlink"];
                ctaEditorCompData["customobject"]["oldDOM"] = dataSetArrForRPA[searchedIndex]["update"][keyOfElement]["customobject"]["oldDOM"];
                ctaEditorCompData["newbuttonlabel"] = this.newbuttonLabel;
                ctaEditorCompData["newbuttonlink"] = this.newbuttonLink;
                ctaEditorCompData["customobject"]["newDOM"] = this.newDOM;
            }
        }
        this.emitUpdateValue.emit(ctaEditorCompData);
    };
    __decorate([
        Input('ctaObject'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CtaEditorComponent.prototype, "setValues", null);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CtaEditorComponent.prototype, "emitUpdateValue", void 0);
    CtaEditorComponent = __decorate([
        Component({
            selector: 'app-cta-editor',
            templateUrl: './cta-editor.component.html',
            styleUrls: ['./cta-editor.component.css']
        }),
        __metadata("design:paramtypes", [ConfigService])
    ], CtaEditorComponent);
    return CtaEditorComponent;
}());
export { CtaEditorComponent };
//# sourceMappingURL=cta-editor.component.js.map