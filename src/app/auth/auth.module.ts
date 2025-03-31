import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "./auth.effects";
import { SignupComponent } from './signup/signup.component';

const routes:Routes=[
    {
        path:'',
        children:[
           {
            path:'',
            redirectTo:'login',
            pathMatch: 'full'
           }, 
           {
            path:'login',
            component :LoginComponent
           },
           {
            path:'signup',
            component :SignupComponent
           }
        ]
    }
]
@NgModule({
  imports: [  
    CommonModule,
     RouterModule.forChild(routes),
     ReactiveFormsModule, 
     EffectsModule.forFeature([AuthEffects]),
    
  ],
  declarations: [    
    LoginComponent, SignupComponent
  ],
  exports: [    
  ]
})
export class AuthModule {}