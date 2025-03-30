import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../services/auth.service";
import { loginStart, loginSuccess } from "./auth.action";
import { exhaustMap, map, catchError, of } from "rxjs";
import { Action, Store } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { setLoadingSpinner } from "../shared/shared.action";

@Injectable({
  providedIn: 'root',
})
export class AuthEffects {
    constructor(private actions$: Actions, private authService: AuthService, private store : Store<AppState>) {}

    login$ = createEffect(() => this.actions$.pipe(
        ofType(loginStart),
        exhaustMap((action) => {
            return this.authService.login(action.email, action.password).pipe(  
                map((data) => {
                    this.store.dispatch(setLoadingSpinner({status: false}))
                    const user = this.authService.formatUser(data);
                    return loginSuccess({user});
                })
            );
        })
    ));
}
