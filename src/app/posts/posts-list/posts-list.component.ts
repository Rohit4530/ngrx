import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/post.model';
import { AppState } from 'src/app/state/app.state';
import { getPosts } from '../state/posts.selector';
import { log } from 'console';
import { deletePost } from '../state/posts.action';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts$!: Observable<Post[]> 
  constructor(private store: Store<AppState>) {
   
   }

   showAddPost: boolean = false;

   ngOnInit(): void {
    this.posts$ = this.store.select(getPosts);
    this.posts$.subscribe(posts => {
      if (posts.length > 0) {
        console.log('Data exists:', posts);
      } else {
        console.log('No data found.');
      }
    });
  }
    toggleAddPost(): void {
    this.showAddPost = !this.showAddPost; // Show/hide form
  }
  onDeletePost(postId: number): void {
    if(confirm('Are you sure you want to delete this post?')) {
      console.log('Delete post:', postId);
      this.store.dispatch(deletePost({ id: postId }));
      
    }
   
  }
}
