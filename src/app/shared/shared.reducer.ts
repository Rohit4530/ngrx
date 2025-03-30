import { createReducer } from "@ngrx/store";

import { on } from "@ngrx/store";
import { setErrorMessage, setLoadingSpinner } from "./shared.action";
import { sharedInitialState } from "./shared.state";

export function SharedReducer(state:any, action:any){
    return _sharedReducer(state,action);
}
export const _sharedReducer=createReducer(
    sharedInitialState,
    on(setLoadingSpinner,(state,action)=>{
        return {
            ...state,
            showLoading: action.status,
        }
    }),
    on(setErrorMessage,(state,action)=>{
        return{
            ...state,
            errorMessage: action.errorMessage
        }
    })
)