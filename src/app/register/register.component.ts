import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regForm!:FormGroup

  constructor(private formbuilder:FormBuilder,private http:HttpClient,private route:Router) { 

  }

  ngOnInit(): void {
    this.regForm=this.formbuilder.group({
          name:[''],
          email:[''],
          pwd:[''],
          cpwd:['']


    }
    )


  }
  reg(){
    this.http.post<any>('http://localhost:3000/user',this.regForm.value).
    subscribe(res=>
      {
        alert("Data added succesfully");

      })
  }


}
