import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { Route, RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { State, StoreModule } from "@ngrx/store";
import { AUTH_STATE_NAME } from "./auth.selector";
import { AuthReducer } from "./auth.reducer";
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "./auth.effects";

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
    StoreModule.forFeature(AUTH_STATE_NAME,AuthReducer) 
  ],
  declarations: [    
    LoginComponent
  ],
  exports: [    
  ]
})
export class AuthModule {}