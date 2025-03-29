import { createReducer } from "@ngrx/store";
import { initialState } from "./auth.state";

export function AuthReducer(state: any, action: any) {
    return _AuthReducer(state, action);
}
const _AuthReducer = createReducer(
    initialState,
)