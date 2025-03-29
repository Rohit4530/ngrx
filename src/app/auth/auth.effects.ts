import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../services/auth.service";
import { loginStart, loginSuccess } from "./auth.action";
import { exhaustMap, map, catchError, of } from "rxjs";
import { Action } from "@ngrx/store";

@Injectable({
  providedIn: 'root',
})
export class AuthEffects {
    constructor(private actions$: Actions, private authService: AuthService) {}

    login$ = createEffect(() => this.actions$.pipe(
        ofType(loginStart),
        exhaustMap((action) => {
            return this.authService.login(action.email, action.password).pipe(
                map((data) => loginSuccess()), 
                
            );
        })
    ));
}
