import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActivitiesComponent } from './activities/activities.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialinfoComponent } from './socialinfo/socialinfo.component';
import { UniqtypePipe } from './shared/pipes/uniqtype.pipe';
import { FilterPlacesPipe } from './shared/pipes/filter-places.pipe';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { environment } from '../environments/environment';
import { PlacesEffects } from './store/effects/places.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
    BrowserModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([PlacesEffects]),
    environment.production
        ? []
        : StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
