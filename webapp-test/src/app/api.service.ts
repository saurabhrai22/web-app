import { Injectable } from '@angular/core';
import { HttpClient,HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
/* export interface userData{
  fcaid : string
} */

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //nodeServicesEndpoint = 'http://localhost:5002';
  //nodeServicesEndpoint = "https://p2cevo-webapp-webservices.azurewebsites.net";
  nodeServicesEndpoint = "https://p2c-webservices.azurewebsites.net";
  webServicesEndpoint = "http://p2cevo.azurewebsites.net";
  
  
  constructor(private httpClient: HttpClient) { }
   
  createHashapi(fcaId): Observable<any> {
   return this.httpClient.post(this.nodeServicesEndpoint + '/helper/createHash',{'fcaid':fcaId});
  }
  userCheck(userId) {
    return this.httpClient.get(this.webServicesEndpoint + '/api/UserInfoes/'+userId);
  }
  addNewUser(userDetails:object) {
    return this.httpClient.post(this.webServicesEndpoint + '/api/UserInfoes', userDetails );
  }

 /*  generateTicketapi(ticketObj) {
    return this.httpClient.post(this.nodeServicesEndpoint + '/generatedummyticket',{'dataset':ticketObj });
  } */

    generateJSONFile(dataSetArr,fileName) {
    return this.httpClient.post(this.nodeServicesEndpoint + '/helper/createJsonFile',{'dataset': dataSetArr, 'fileName' : fileName});
   }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  } 
}
