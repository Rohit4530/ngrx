import { AuthReducer } from "../auth/auth.reducer";
import { AUTH_STATE_NAME } from "../auth/auth.selector";
import { AuthState } from "../auth/auth.state";
import { counterReducer } from "../counter/state/counter.reducer";
import { CounterState } from "../counter/state/counter.state";
import { postReducer } from "../posts/state/posts.reducer";
import { PostState } from "../posts/state/posts.state";
import { SharedReducer } from "../shared/shared.reducer";
import { SHARED_STATE_NAME } from "../shared/shared.selector";
import { SharedState } from "../shared/shared.state";

export interface AppState {
    [SHARED_STATE_NAME]:SharedState 
    [AUTH_STATE_NAME]:AuthState      
}
export const appReducer={
  [SHARED_STATE_NAME]:SharedReducer,
  [AUTH_STATE_NAME]:AuthReducer
}