export const initialState: CounterState = {
    counter: 5,
    name: 'Rohit Gunjal',
    posts: undefined
}
export interface CounterState {
    posts: any
    counter: number
    name : string
}