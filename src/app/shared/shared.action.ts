import { createAction, props } from "@ngrx/store"

export const SET_LOADING_ACTION= '[ SHARED STATE ] set loading spinner'

export const setLoadingSpinner=createAction(SET_LOADING_ACTION,props<{
    status: boolean
}>())

export const SET_ERROR_MESSAGE='[ Shared State] set loading spinner'
export const setErrorMessage=createAction(SET_ERROR_MESSAGE,props<{errorMessage: string}>())