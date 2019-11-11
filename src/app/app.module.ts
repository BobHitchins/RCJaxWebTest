import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { AfirePageComponent } from './afire-page/afire-page.component';
import { AfireNavComponent } from './afire-page/afire-nav/afire-nav.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { EncounterPageComponent } from './encounter-page/encounter-page.component';
import { AdminNavComponent } from './admin-page/admin-nav/admin-nav.component';
import { EncounterNavComponent } from './encounter-page/encounter-nav/encounter-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    AfirePageComponent,
    AfireNavComponent,
    AdminPageComponent,
    EncounterPageComponent,
    AdminNavComponent,
    EncounterNavComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
