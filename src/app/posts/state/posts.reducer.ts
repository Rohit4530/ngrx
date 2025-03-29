import { createReducer, on } from "@ngrx/store";
import { initialState } from "./posts.state";
import { addPost, deletePost, updatePost } from "./posts.action";


export function postReducer(state = initialState, action: any) {
   return _postReducer(state, action);
}
export const _postReducer = createReducer(
    initialState  ,
     on(addPost,(state,action)=>{
        let post={...action.post}
        post.id=(state.posts.length)+1
        return {
            ...state,
            posts:[
                ...state.posts,post
            ]
        }
    },
    ),
    on(updatePost,(state,action)=>{
        console.log('update post',action.post);
        
        let post={...action.post}
        let posts=state.posts.map((p)=>{
            if(p.id===post.id){
                return post
            }else{
                return p
            }
        })
        return {
            ...state,
            posts:posts
        }
    }),
    on(deletePost,(state,action)=>{
        let posts=state.posts.filter((p)=>p.id!==action.id)
        return {
            ...state,
            posts:posts
        }
    }),
)