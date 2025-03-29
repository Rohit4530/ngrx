import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { loginStart } from '../auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   loginForm!: FormGroup;
  constructor(private store : Store<AppState>) { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email,Validators.minLength(5)]),
      password: new FormControl('',[Validators.required,Validators.minLength(4)]),
    });
  }
  onLoginForm(){
    if(this.loginForm.valid){
      const email=this.loginForm.value.email
      const password=this.loginForm.value.password
      this.store.dispatch(loginStart({email,password}))
      console.log("indide valid login form");
      
    }
    else{
      console.log('Invalid form');
    }
  }

}
