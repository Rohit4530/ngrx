import { counterReducer } from "../counter/state/counter.reducer";
import { CounterState } from "../counter/state/counter.state";
import { postReducer } from "../posts/state/posts.reducer";
import { PostState } from "../posts/state/posts.state";

export interface AppState {
    counter: CounterState;
    posts: PostState;       
}
export const appReducer={
    counter : counterReducer,
    posts: postReducer
}