import { createReducer, on } from "@ngrx/store";
import { initialState } from "./auth.state";
import { loginSuccess } from "./auth.action";

export function AuthReducer(state: any, action: any) {
    return _AuthReducer(state, action);
}
const _AuthReducer = createReducer(
    initialState,
    on(loginSuccess, (state, action) => {
        return {
            ...state,
            user: action.user
        };
    })
)