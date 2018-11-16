import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ApiService } from '../api.service'
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  products:any = [];
  /* customersObservable : Observable<Customer[]>; */ 

  lForm:FormGroup;
  post:any;
  userName:string;
  password:string;
  
  
  constructor( private formBuilder: FormBuilder, private http:HttpClient, public api:ApiService ) {
    this.lForm = formBuilder.group({
      'username': [null,Validators.required],
      'password': [null,Validators.required]
      });
   }

  ngOnInit() {
    if(localStorage.p2c_fcaHash != undefined ){
      window.location.href = '/home';
    } 
  }
 
  submitValues(post){
    if(post.username != null  && post.password != null )
    {
      var fcaval = post.username;
      this.api.createHashapi(fcaval).subscribe((data: {}) => {
        localStorage.p2c_fcaHash = data["md5_val"];
        //console.log('Data new: ',data);
        window.location.href = '/home';
      });
    }

    
    //window.location.href = '/home';
  
   /*  var fcaval = "f39130c";
      const params = new HttpParams({fromString : fcaval});
      this.http.request("GET","http://localhost:5000/convertmd5?fcaid=f39130c");
      console.log('Data Submitted.!'); */
    //console.log(testData);
    
  }
}
