import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Observable, Subscription } from 'rxjs';
import { get } from 'http';
import { getCounter } from '../state/counter.selector';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {

 
  // counter!:number;
  //  counterSubscription!: Subscription;
   counter$!: Observable<number>;
  constructor(private store: Store<AppState>) { }
  // ngOnDestroy(): void {
  //   throw new Error('Method not implemented.');
  // }

  ngOnInit(): void {
    
    this.counter$ = this.store.select(getCounter);
  }
  // onDistroy(){
  //   this.counterSubscription.unsubscribe();
  // }
}
