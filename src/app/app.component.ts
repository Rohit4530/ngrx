import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './state/app.state';
import { get } from 'node:http';
import { getErrorMessage, getLoading } from './shared/shared.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
  this.showLoading= this.store.select(getLoading)
  this.errorMessage=this.store.select(getErrorMessage)
  }
  title = 'counter-app';

  showLoading!: Observable<boolean>;
  errorMessage!: Observable<string>;

  constructor(private store : Store<AppState>){

  }



}
