import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AfirePageComponent } from './afire-page/afire-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { EncounterPageComponent } from './encounter-page/encounter-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
   { path: 'afire', component: AfirePageComponent },
   { path: 'admin', component: AdminPageComponent },
   { path: 'encounters', component: EncounterPageComponent },
   { path: '', redirectTo: '/admin', pathMatch: 'full' },
   { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
