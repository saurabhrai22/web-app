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
  //endpoint = 'http://localhost:5000';
  endpoint = "https://p2cevo-webapp-webservices.azurewebsites.net";

  constructor(private httpClient: HttpClient) { }
   
  createHashapi(fcaId): Observable<any> {
   return this.httpClient.post(this.endpoint + '/createhash',{'fcaid':fcaId});
  }

  generateTicketapi(ticketObj) {
    return this.httpClient.post(this.endpoint + '/generatedummyticket',{'dataset':ticketObj });
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
