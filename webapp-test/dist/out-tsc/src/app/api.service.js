var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
/* export interface userData{
  fcaid : string
} */
var ApiService = /** @class */ (function () {
    function ApiService(httpClient) {
        this.httpClient = httpClient;
        //nodeServicesEndpoint = 'http://localhost:5002';
        //nodeServicesEndpoint = "https://p2cevo-webapp-webservices.azurewebsites.net";
        this.nodeServicesEndpoint = "https://p2c-webservices.azurewebsites.net";
        this.webServicesEndpoint = "http://p2cevo.azurewebsites.net";
    }
    ApiService.prototype.createHashapi = function (fcaId) {
        return this.httpClient.post(this.nodeServicesEndpoint + '/createhash', { 'fcaid': fcaId });
    };
    ApiService.prototype.userCheck = function (userId) {
        return this.httpClient.get(this.webServicesEndpoint + '/api/UserInfoes/' + userId);
    };
    ApiService.prototype.addNewUser = function (userDetails) {
        return this.httpClient.post(this.webServicesEndpoint + '/api/UserInfoes', userDetails);
    };
    /*  generateTicketapi(ticketObj) {
       return this.httpClient.post(this.nodeServicesEndpoint + '/generatedummyticket',{'dataset':ticketObj });
     } */
    ApiService.prototype.generateJSONFile = function (dataSetArr, fileName) {
        return this.httpClient.post(this.nodeServicesEndpoint + '/createJsonFile', { 'dataset': dataSetArr, 'fileName': fileName });
    };
    ApiService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return of(result);
        };
    };
    ApiService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], ApiService);
    return ApiService;
}());
export { ApiService };
//# sourceMappingURL=api.service.js.map