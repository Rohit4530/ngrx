import { NgModule } from "@angular/core";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { AddPostsComponent } from "./add-posts/add-posts.component";
import { EditPostsComponent } from "./edit-posts/edit-posts.component";
import { Route, RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { Store, StoreModule } from "@ngrx/store";
import { postReducer } from "./state/posts.reducer";
const routes:Routes = [
    {
      path: '',
      component: PostsListComponent,
      children: [
        {
          path: 'add',
           component: AddPostsComponent 
        },
        {
          path:'edit/:id',
          component: EditPostsComponent
        }
      ]
    }  
 ]    

@NgModule({
  imports: [    
     CommonModule,RouterModule.forChild(routes),
     ReactiveFormsModule,
     StoreModule.forFeature('posts', postReducer), // Add your posts reducer here
  ],
  declarations: [
   
       PostsListComponent,
       AddPostsComponent,
       EditPostsComponent
  ]
})
export class PostsModule { }