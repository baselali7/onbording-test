import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMuneComponent } from './components/main-mune/main-mune.component';
import { PageDetailsComponent } from './components/page-details/page-details.component';

const routes: Routes = [
  { path: 'welcome', pathMatch: 'full', redirectTo: '/welcome' },
  {
    path: 'main', component: MainMuneComponent,

    children: [
      { path: 'prdoct-details', component: PageDetailsComponent }]
  },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
