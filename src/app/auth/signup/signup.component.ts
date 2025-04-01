import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { AuthState } from '../auth.state';
import { signupStart } from '../auth.action';
import { setLoadingSpinner } from 'src/app/shared/shared.action';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm !: FormGroup

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email,Validators.minLength(5)]),
      password:new FormControl('',[Validators.required,Validators.minLength(4)]),
    })
  }
  onSignupForm(){
   console.log(this.signupForm.value);
   const email=this.signupForm.value.email
   const password=this.signupForm.value.password
   this.store.dispatch(setLoadingSpinner({status:true}))
   this.store.dispatch(signupStart({ email ,password}))
  }
}
