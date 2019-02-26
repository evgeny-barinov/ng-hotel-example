import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {IStore} from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hot Weather Widget';

  public selectedPlace: IRelaxDestination | boolean = false;

  constructor(private store: Store<IStore>) { }

  ngOnInit() {
    this.store.select('selectedPlace').subscribe((selectedPlace: IRelaxDestination) => {
      this.selectedPlace = selectedPlace;
    });
  }
}
