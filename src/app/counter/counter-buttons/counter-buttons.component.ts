import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {
  
  constructor(private store : Store<{counter :CounterState}>) { }

  ngOnInit(): void {
  }
  onIncrement():void{
   this.store.dispatch({type:'increment'})
  }
  onDecrement(){    
    this.store.dispatch({type:'decrement'})
  }
  onReset(){
   this.store.dispatch({type:'reset'})
  } 

}
