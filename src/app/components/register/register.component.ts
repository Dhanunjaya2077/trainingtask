import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

import {TrainerService} from '../../services/trainer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isEnabled : boolean = false;
  trainerRegisterData :object ={};
  constructor(private _router:  Router,private _trainerService:TrainerService,private _httpclinet:HttpClient) { }

  ngOnInit() {
  }
  registerForm=new FormGroup({
    role:new FormControl("",[
      Validators.required, 
      Validators.minLength(3),
    ]),
    name:new FormControl("",[
      Validators.required, 
      Validators.minLength(3),
    ]),
    mobile:new FormControl("",[
      Validators.required, 
      Validators.minLength(3),
    ]),
    skill:new FormControl("",[
      Validators.required, 
      Validators.minLength(3),
    ]),
    experience:new FormControl("",[
      Validators.required, 
      Validators.minLength(3),
    ]),
    email:new FormControl("",[
      Validators.required, 
      Validators.minLength(3),
    ]),
    password:new FormControl("",Validators.required)
    
  })
  selectedRole(value){
    console.log(value);
    if(value == "Trainer"){
      this.isEnabled=true;
    }else if(value == "null"){
      alert("Please Select Role");
    }
    else{
      this.isEnabled=false;
    }
  }
  register(registerdata){
    console.log(registerdata)
    if(registerdata.role == "Trainer"){
      this.trainerRegisterData={
        role:registerdata.role,
        name:registerdata.name,
        mobile:registerdata.mobile,
        skill:registerdata.skill,
        experience:registerdata.experience,
        email:registerdata.email,
        password:registerdata.password
      }
      return this._httpclinet.post("http://localhost:3000/trainers",this.trainerRegisterData).subscribe(res=>{
        console.log("Triner Registered")
      })
    /*  
    this._trainerService.postTrainerdata(this.registerForm)).subscribe(res=>{
      console.log("register")
    });
    */
    }else if(registerdata.role == "Trainee"){
      this.trainerRegisterData={
        role:registerdata.role,
        name:registerdata.name,
        mobile:registerdata.mobile,
        email:registerdata.email,
        password:registerdata.password
      }
      return this._httpclinet.post("http://localhost:3000/trainee",(this.trainerRegisterData)).subscribe(res=>{
        console.log("Trinee Registered")
      })
    }else if (registerdata.role == "Operator"){
      this.trainerRegisterData={
        role:registerdata.role,
        name:registerdata.name,
        mobile:registerdata.mobile,
        email:registerdata.email,
        password:registerdata.password
      }
      return this._httpclinet.post("http://localhost:3000/operator",(this.trainerRegisterData)).subscribe(res=>{
        console.log("Operator Registered")
      })
    }
}
    
}
