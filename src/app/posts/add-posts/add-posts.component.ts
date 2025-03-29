import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
// Removed the randomInt import as it is not supported in Angular's browser environment.
import { Post } from 'src/app/post.model';
import { AppState } from 'src/app/state/app.state';
import { addPost } from '../state/posts.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css']
})
export class AddPostsComponent implements OnInit {
  postForm!: FormGroup;

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(10)])
    });
  }

  onAddPost() {
    const post: Post = {
      title: this.postForm.value['title'],
      description: this.postForm.value['description']
    };
    this.store.dispatch(addPost({ post }));
    this.router.navigate(['posts']);
  }
}