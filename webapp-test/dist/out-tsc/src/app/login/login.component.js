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
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { ApiService } from '../api.service';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, http, api, router) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.api = api;
        this.router = router;
        this.lForm = formBuilder.group({
            'username': [null, Validators.required],
            'password': [null, Validators.required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.p2c_fcaHash != undefined) {
            this.router.navigate(['/edit']);
        }
    };
    LoginComponent.prototype.submitValues = function (post) {
        var _this = this;
        if (post.username != null && post.password != null) {
            var fcaval = post.username;
            this.api.createHashapi(fcaval).subscribe(function (data) {
                _this.api.userCheck(data["md5_val"]).subscribe(function (response) {
                    console.log('UserCheck success..!');
                    console.log('Response for the following: ', response);
                    localStorage.p2c_fcaHash = response["UserID"];
                    _this.router.navigate(['/edit']);
                }, function (err) {
                    console.log('UserCheck Failed..!');
                    console.log('Error for the following: ', err);
                    var userDetails = {
                        "UserID": data["md5_val"],
                        "status": "true"
                    };
                    _this.api.addNewUser(userDetails).subscribe(function (response) {
                        console.log('New User Added..!');
                        localStorage.p2c_fcaHash = response["UserID"];
                        _this.router.navigate(['/edit']);
                    });
                });
            });
        }
    };
    LoginComponent = __decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        __metadata("design:paramtypes", [FormBuilder, HttpClient, ApiService, Router])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map