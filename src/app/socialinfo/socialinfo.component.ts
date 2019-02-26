import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {IStore} from '../store';

@Component({
  selector: 'app-followers',
  templateUrl: './socialinfo.component.html',
  styleUrls: ['./socialinfo.component.css']
})
export class SocialinfoComponent implements OnInit {

  public socialInfo: ISocialInfo;

  constructor(private store: Store<IStore>) { }

  ngOnInit() {
    this.store.select('selectedPlace').subscribe((selectedPlace: IRelaxDestination) => {
      this.socialInfo = selectedPlace.social_info;
    });
  }

}
