import { createReducer, on } from "@ngrx/store";
import { increment, decrement, reset, customIncrement, changeName } from "./counter.action";
import { initialState } from "./counter.state";

export function counterReducer(state:any, action:any) {
   return _counterReducer(state, action);
}
const _counterReducer = createReducer(
  initialState,        
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    ),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    ),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0
        }
    }
    ),   
    on (customIncrement, (state, action) => {
        return {
            ...state,   
            counter:  state.counter + action.value
        }   
    }
    ) ,
    on (changeName, (state) => {
        return {    
            ...state,
            name: 'Mayur Dokhe'
        }
    }
    )

);