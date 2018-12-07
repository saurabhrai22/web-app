var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ConfigService } from '../config.service';
var VirtualAssistantComponent = /** @class */ (function () {
    function VirtualAssistantComponent(config) {
        this.config = config;
    }
    VirtualAssistantComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.addEventListener('message', function (evt) {
            console.log('RAW Data: ', evt.data);
            /* if(evt.data.match("source"))
            { */
            var vaMessage = evt.data;
            if (_this.config.checkTypeOf(vaMessage).match('object')) {
                if (Object.keys(vaMessage).includes("source")) {
                    if (vaMessage["source"] == "VA") {
                        if (vaMessage["event"] == "va_init") {
                            var waResponsetoVa = {
                                source: "WA",
                                event: "wa_init_response",
                                data: {
                                    userInfo: {
                                        firstName: "John",
                                        lastName: "Smith",
                                        companyId: "123456",
                                        email: "john.smith@accenture.com"
                                    },
                                    brandDetails: {
                                        market: "IT",
                                        brand: "FIAT",
                                        language: "english"
                                    } /* ,
                                    iFrameVASize:
                                    {
                                        height: "500px",
                                        width: "500px",
                                        class: "vaclass"
                                    } */
                                }
                            };
                            console.log('Message Sent..!');
                            window.frames[1].postMessage(waResponsetoVa, '*');
                        }
                    }
                }
            }
            /* } */
        });
    };
    VirtualAssistantComponent = __decorate([
        Component({
            selector: 'app-virtual-assistant',
            templateUrl: './virtual-assistant.component.html',
            styleUrls: ['./virtual-assistant.component.css']
        }),
        __metadata("design:paramtypes", [ConfigService])
    ], VirtualAssistantComponent);
    return VirtualAssistantComponent;
}());
export { VirtualAssistantComponent };
//# sourceMappingURL=virtual-assistant.component.js.map