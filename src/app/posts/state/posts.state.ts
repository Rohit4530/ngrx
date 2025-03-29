import { Post } from "src/app/post.model";

export interface PostState {
    posts: Post[];
 
}
export const initialState: PostState = {
    posts: [
        {
            id: 1,
            title: 'Post 1',
            description: 'Description for Post 1'
        },
        {
            id: 2,
            title: 'Post 2',
            description: 'Description for Post 2'
        },
        {
            id: 3,
            title: 'Post 3',
            description: 'Description for Post 3'
        }
    ]
};