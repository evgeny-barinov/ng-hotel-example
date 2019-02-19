import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActivitiesComponent } from './activities/activities.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialinfoComponent } from './socialinfo/socialinfo.component';
import { UniqtypePipe } from './shared/pipes/uniqtype.pipe';
import { FilterPlacesPipe } from './shared/pipes/filter-places.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ActivitiesComponent,
    WeatherComponent,
    SocialinfoComponent,
    UniqtypePipe,
    FilterPlacesPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
