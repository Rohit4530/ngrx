import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/post.model";

export const POSTS_LOADED = '[Posts] Posts Loaded';

export const UPDATE_POST_ACTION='[Posts] Update Post';

export const DELETE_POST_ACTION='[Posts] Delete Post';

export const addPost = createAction(POSTS_LOADED,props<{post:Post}>());
export const updatePost = createAction(UPDATE_POST_ACTION,props<{post:Post}>());
export const deletePost = createAction(DELETE_POST_ACTION,props<{id:number}>());