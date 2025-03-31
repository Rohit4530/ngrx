import { createFeatureSelector } from "@ngrx/store"
import { AuthState } from "./auth.state"

export const AUTH_STATE_NAME='auth'
export const getAuthState =createFeatureSelector<AuthState>(AUTH_STATE_NAME)
import { createSelector } from "@ngrx/store";

export const isAuthenticated = createSelector(getAuthState, (state) => {
    return state.user ? true : false;
});