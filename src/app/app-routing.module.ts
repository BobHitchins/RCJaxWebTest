import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MemberPageComponent } from './member-page/member-page.component';
import { AfirePageComponent } from './afire-page/afire-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { EncounterPageComponent } from './encounter-page/encounter-page.component';
import { InspirationPageComponent } from './inspiration-page/inspiration-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CaseStudyComponent } from './case-study/case-study.component';
import { LinksComponent } from './links/links.component';

const routes: Routes = [
   { path: 'home', component: HomePageComponent },
   { path: 'members', component: MemberPageComponent },
   { path: 'afire', component: AfirePageComponent },
   { path: 'admin', component: AdminPageComponent },
   { path: 'encounters', component: EncounterPageComponent },
   { path: 'case-studies', component: CaseStudyComponent },
   { path: 'links', component: LinksComponent },
   { path: 'inspiration', component: InspirationPageComponent },
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
