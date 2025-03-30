import { initialState } from "../auth/auth.state"

export interface SharedState{
     showLoading: boolean
}
export const sharedInitialState: SharedState={
    showLoading:false
}