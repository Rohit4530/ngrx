import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { PostState } from "./posts.state";

const getPostState=createFeatureSelector<PostState>('posts');

export const getPosts=createSelector(getPostState, (state)=>{   
    return state.posts;
})
export const getPostById=createSelector(getPostState, (state:any, props:any)=>{   
    console.log(props);
    
    return state.posts.find((post:any)=>post.id===props.id);
})
