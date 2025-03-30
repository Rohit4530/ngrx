import { initialState } from "../auth/auth.state"

export interface SharedState{
     showLoading: boolean,
     errorMessage:string
}
export const sharedInitialState: SharedState={
    showLoading:false,
    errorMessage: ''
}