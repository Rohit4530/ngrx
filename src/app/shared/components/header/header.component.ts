import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getAuthState, isAuthenticated } from 'src/app/auth/auth.selector';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 isAuthanticated$!:Observable<boolean>

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.isAuthanticated$ = this.store.select(isAuthenticated)
  }

}
