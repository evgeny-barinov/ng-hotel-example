import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-followers',
  templateUrl: './socialinfo.component.html',
  styleUrls: ['./socialinfo.component.css']
})
export class SocialinfoComponent implements OnInit {

  @Input()
  public socialInfo: ISocialInfo;

  constructor() { }

  ngOnInit() {
  }

}
