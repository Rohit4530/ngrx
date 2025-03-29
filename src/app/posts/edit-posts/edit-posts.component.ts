import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';

import { Post } from 'src/app/post.model';
import { getPostById } from '../state/posts.selector';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { updatePost } from '../state/posts.action';

@Component({
  selector: 'app-edit-posts',
  templateUrl: './edit-posts.component.html',
  styleUrls: ['./edit-posts.component.css']
})
export class EditPostsComponent implements OnInit {
  postId!:number;
  postForm!: FormGroup;
  constructor(private route : ActivatedRoute, private store : Store <AppState>, private router: Router) { }
post$!: Observable<Post>
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const postId = params.get('id');
      console.log(postId); 

      this.post$=this.store.select(getPostById, { id: +postId! })
      this.createForm();
  }
  )
  }
    createForm() {
      this.post$.subscribe(post => {
        this.postForm = new FormGroup({
          title: new FormControl(post?.title, [Validators.required, Validators.minLength(6)]),
          description: new FormControl(post?.description, [Validators.required, Validators.minLength(10)])
        });
        this.postId = post?.id!;
      });
    }
    onUpdatePost() {
      if (this.postForm.valid) {
        const updatedPost: Post = {
          id: this.postId,
          title: this.postForm.value['title'],
          description: this.postForm.value['description']
        };
       
        // Dispatch the update action here
        this.store.dispatch(updatePost ({post: updatedPost }));
        this.router.navigate(['posts']);
      }
    }
}   
