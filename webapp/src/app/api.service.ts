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
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }
  constructor(private http: HttpClient) { }
  //This is for the GET request
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
   
  createHashapi(fcaId): Observable<any> {
    //This is for the GET request
   return this.http.get(this.endpoint + '/createhash',{headers : new HttpHeaders().set("Access-Control-Allow-Origin","*",).set('Content-Type',  'application/json'), params : new HttpParams().set('fcaid',fcaId)});
    /* .pipe(
      map(this.extractData)); */

    //This is for the POST request
    //return this.http.post(this.endpoint + '/createhash',null,{headers : new HttpHeaders().set("Access-Control-Allow-Origin","*",).set('Content-Type',  'application/json'), params : new HttpParams().set('fcaid',fcaId)});
    //return this.http.post(this.endpoint+"/createhash",{'fcaid':fcaId});
  }
  generateTicketapi(ticketObj) {
    //This is for the GET request
    /* return this.http.get(this.endpoint + '/convertmd5?fcaid='+fcaId).pipe(
      map(this.extractData)); */

    //This is for the POST request
    return this.http.get(this.endpoint + '/generatedummyticket',{headers : new HttpHeaders().set("Access-Control-Allow-Origin","*",).set('Content-Type',  'application/json'), params : new HttpParams().set('dataset',ticketObj )});

   // return this.http.post(this.endpoint+"/generatedummyticket",null,{params: new HttpParams().set( 'dataset',ticketObj )});
  }
//{params: new HttpParams().set( 'fcaid',fcaid )}
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
