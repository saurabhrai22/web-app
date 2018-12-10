import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { HttpClient } from "@angular/common/http";
import { ApiService } from '../api.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  lForm:FormGroup;
  post:any;
  userName:string;
  password:string;
  
  
  constructor( private formBuilder: FormBuilder, private http:HttpClient, public api:ApiService, public router:Router ) {
    this.lForm = formBuilder.group({
      'username': [null,Validators.required],
      'password': [null,Validators.required]
      });
   }

  ngOnInit() {
    if(localStorage.p2c_fcaHash != undefined ){
      this.router.navigate(['/edit']);
    } 
  }
 
  submitValues(post){
    if(post.username != null  && post.password != null )
    {
      var fcaval = post.username;
      this.api.createHashapi(fcaval).subscribe((data: {}) => {
        this.api.userCheck(data["md5_val"]).subscribe((response:{})=>{
          console.log('UserCheck success..!')
          console.log('Response for the following: ',response);
          if(response["status"] == true){
            localStorage.p2c_fcaHash = response["UserID"];
            this.router.navigate(['/edit']);
          }
          else if(response["status"] == false){
            let userDetails ={
              "UserID": data["md5_val"],
              "status": "true"
              }
             
            this.api.addNewUser(userDetails).subscribe((response:any)=>{
              console.log('New User Added..!')
              console.log('response.userID: ',response);
              localStorage.p2c_fcaHash = data["md5_val"];
              this.router.navigate(['/edit']);
            });

          }
          
        },(err:any) => {
          console.log('Server Error..!')
        })
      });
    }
  }
}