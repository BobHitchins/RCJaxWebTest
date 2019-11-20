import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AfirePageComponent } from './afire-page/afire-page.component';
import { AfireNavComponent } from './afire-page/afire-nav/afire-nav.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminNavComponent } from './admin-page/admin-nav/admin-nav.component';
import { EncounterPageComponent } from './encounter-page/encounter-page.component';
import { EncounterNavComponent } from './encounter-page/encounter-nav/encounter-nav.component';
import { InspirationPageComponent } from './inspiration-page/inspiration-page.component';
import { InspirationNavComponent } from './inspiration-page/inspiration-nav/inspiration-nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CaseStudyComponent } from './case-study/case-study.component';
import { LinksComponent } from './links/links.component';
import { MemberPageComponent } from './member-page/member-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HomePageComponent,
    AfirePageComponent,
    AfireNavComponent,
    AdminPageComponent,
    AdminNavComponent,
    EncounterPageComponent,
    EncounterNavComponent,
    InspirationPageComponent,
    InspirationNavComponent,
    PageNotFoundComponent,
    CaseStudyComponent,
    LinksComponent,
    HomePageComponent,
    MemberPageComponent
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
