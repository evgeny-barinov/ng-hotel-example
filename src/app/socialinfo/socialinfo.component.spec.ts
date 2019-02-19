import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialinfoComponent } from './socialinfo.component';

describe('SocialinfoComponent', () => {
  let component: SocialinfoComponent;
  let fixture: ComponentFixture<SocialinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
