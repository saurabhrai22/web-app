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
  
  //nodeServicesEndpoint = "https://p2cevo-webapp-webservices.azurewebsites.net";
  nodeServicesEndpoint = "https://p2c-webservices.azurewebsites.net";
  webServicesEndpoint = "https://p2cevo.azurewebsites.net";
  //nodeServicesEndpoint1 = "http://localhost:5005";
  
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
  
  generateTicketApi(ticketDetails:object){
    return this.httpClient.post(this.nodeServicesEndpoint +'/jira/createUpdateCanvasTicket', ticketDetails);
  }

  generateJSONFile(dataSetArr,fileName) {
    return this.httpClient.post(this.nodeServicesEndpoint + '/helper/createJsonFile',{'dataset': dataSetArr, 'fileName' : fileName});
   }
  uploadFileToJira(ticketNum:string,fileName:string){
    return this.httpClient.post(this.nodeServicesEndpoint + '/jira/uploadFileToJira',{'data': {'ticketNum':ticketNum,'fileName':fileName}});
  }

  addNewTicketToDB(newTicketDetails:object){
    return this.httpClient.post(this.webServicesEndpoint + '/api/TcktDetails',newTicketDetails);
  }

  changeTicketStatusInJira(ticketStatus:object)
  {
    return this.httpClient.post(this.nodeServicesEndpoint + '/jira/changeJiraStatus',ticketStatus);
  }
  getAllTickets(userId) {
    return this.httpClient.get(this.webServicesEndpoint + '/api/TcktDetails?userId='+userId);
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
