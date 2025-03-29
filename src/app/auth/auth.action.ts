import { createAction, props } from "@ngrx/store";

export const LOGIN_START='[Auth page] login start';
export const LOGIN_SUCCESS='[Auth page] login success';
export const LOGIN_FAILED='[Auth page] login failed';

export const loginStart = createAction('[Auth] Login Start', props<{ email: string; password: string }>());
export const loginSuccess=createAction(LOGIN_SUCCESS)