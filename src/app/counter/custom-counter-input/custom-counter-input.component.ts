import { Component, OnInit } from '@angular/core';
import { CounterState } from '../state/counter.state';
import { Store } from '@ngrx/store';
import { log } from 'console';
import { getCounterName } from '../state/counter.selector';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {
 value!: number; 
  constructor(private store: Store<AppState>) { }
 name$ !: Observable<string>
  ngOnInit(): void {
   this.name$= this.store.select(getCounterName)
  }
  onAdd(){
    this.store.dispatch({type:'customIncrement',value:+this.value})
    console.log("add is called");
    
  }
  
  onChangeName(){
    console.log("change name");
    
    this.store.dispatch({type:'changeName'})
  }
}
