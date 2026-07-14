import { createReducer, on } from "@ngrx/store";
import { increment, decrement, reset } from './counter.actions'

// Initial state
export const initialState = 0;

// create reducer function

export const reducer = createReducer(
    initialState,
    // on increment action
    on(increment, (state) => state + 1),
    // decrement action
    on(decrement, (state) => state - 1),
    // reset action
    on(reset, () => initialState)
)