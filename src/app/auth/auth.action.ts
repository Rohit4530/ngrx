import { createAction, props } from "@ngrx/store";
import { User } from "../models/User.model";

export const LOGIN_START='[Auth page] login start';
export const LOGIN_SUCCESS='[Auth page] login success';
export const LOGIN_FAILED='[Auth page] login failed';
export const SIGNUP_START='[Auth page] signup started'

export const loginStart = createAction('[Auth] Login Start', props<{ email: string; password: string }>());
export const loginSuccess=createAction(LOGIN_SUCCESS,
    props<{user: User}>()
)
export const signupStart= createAction(SIGNUP_START,props<{email:string, password: string}>())
export const signupSuccess=createAction(LOGIN_SUCCESS,
    props<{user: User}>()
)


