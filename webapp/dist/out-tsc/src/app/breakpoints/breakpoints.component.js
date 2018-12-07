var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
var BreakpointsComponent = /** @class */ (function () {
    function BreakpointsComponent() {
        this.breakpointsEvents = new EventEmitter();
        this.desktop = "../assets/images/desktop_active.png";
        this.portriat = "../assets/images/portrait_inactive.png";
        this.landscape = "../assets/images/landscape_inactive.png";
        this.mobile = "../assets/images/mobile_inactive.png";
    }
    BreakpointsComponent.prototype.ngOnInit = function () {
    };
    BreakpointsComponent.prototype.changeToDesktop = function () {
        this.breakpointsEvents.emit('100%');
        this.desktop = "../assets/images/desktop_active.png";
        this.portriat = "../assets/images/portrait_inactive.png";
        this.landscape = "../assets/images/landscape_inactive.png";
        this.mobile = "../assets/images/mobile_inactive.png";
    };
    BreakpointsComponent.prototype.changeToTabletPortriat = function () {
        this.breakpointsEvents.emit('768px');
        this.desktop = "../assets/images/desktop_inactive.png";
        this.portriat = "../assets/images/portrait_active.png";
        this.landscape = "../assets/images/landscape_inactive.png";
        this.mobile = "../assets/images/mobile_inactive.png";
    };
    BreakpointsComponent.prototype.changeToTabletLandscape = function () {
        this.breakpointsEvents.emit('1024px');
        this.desktop = "../assets/images/desktop_inactive.png";
        this.portriat = "../assets/images/portrait_inactive.png";
        this.landscape = "../assets/images/landscape_active.png";
        this.mobile = "../assets/images/mobile_inactive.png";
    };
    BreakpointsComponent.prototype.changeToMobile = function () {
        this.breakpointsEvents.emit('375px');
        this.desktop = "../assets/images/desktop_inactive.png";
        this.portriat = "../assets/images/portrait_inactive.png";
        this.landscape = "../assets/images/landscape_inactive.png";
        this.mobile = "../assets/images/mobile_active.png";
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], BreakpointsComponent.prototype, "breakpointsEvents", void 0);
    BreakpointsComponent = __decorate([
        Component({
            selector: 'app-breakpoints',
            templateUrl: './breakpoints.component.html',
            styleUrls: ['./breakpoints.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], BreakpointsComponent);
    return BreakpointsComponent;
}());
export { BreakpointsComponent };
//# sourceMappingURL=breakpoints.component.js.map