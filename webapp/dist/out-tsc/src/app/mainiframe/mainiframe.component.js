var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Pipe, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ConfigService } from '../config.service';
var SafePipe = /** @class */ (function () {
    function SafePipe(DomSanitizer) {
        this.DomSanitizer = DomSanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.DomSanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        Pipe({ name: 'safe' }),
        __metadata("design:paramtypes", [DomSanitizer])
    ], SafePipe);
    return SafePipe;
}());
export { SafePipe };
var MainiframeComponent = /** @class */ (function () {
    function MainiframeComponent(config) {
        this.config = config;
        this.sendJsonToHome = new EventEmitter();
    }
    Object.defineProperty(MainiframeComponent.prototype, "changeIframeSize", {
        set: function (iframeSize) {
            if (iframeSize != undefined) {
                var iframe = document.getElementById('main-iframe-id');
                iframe.style.width = iframeSize;
                $('#main-iframe-id').attr('src', $('#main-iframe-id').attr('src'));
                // this.url += '';
                //iframe += '';
            }
        },
        enumerable: true,
        configurable: true
    });
    MainiframeComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.addEventListener('message', function (evt) {
            /*if(this.config.checkTypeOf(evt.data).match('string')){
             if(evt.data.match('p2csettings'))
           {
             console.log('Retrived Message: ',JSON.parse(evt.data));
             this.sendJsonToHome.emit(JSON.parse(evt.data));
           }
           }
         else*/
            if (_this.config.checkTypeOf(evt.data).match('object')) {
                if (Object.keys(evt.data).includes("source")) {
                    if (evt.data["source"] == "Iframe") {
                        _this.sendJsonToHome.emit(evt.data["data"]);
                    }
                }
            }
        });
    };
    __decorate([
        Input('url'),
        __metadata("design:type", Object)
    ], MainiframeComponent.prototype, "url", void 0);
    __decorate([
        Input('iframeSize'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MainiframeComponent.prototype, "changeIframeSize", null);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], MainiframeComponent.prototype, "sendJsonToHome", void 0);
    MainiframeComponent = __decorate([
        Component({
            selector: 'app-mainiframe',
            templateUrl: './mainiframe.component.html',
            styleUrls: ['./mainiframe.component.css']
        }),
        __metadata("design:paramtypes", [ConfigService])
    ], MainiframeComponent);
    return MainiframeComponent;
}());
export { MainiframeComponent };
//# sourceMappingURL=mainiframe.component.js.map