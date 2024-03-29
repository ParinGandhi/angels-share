import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FactsComponent } from './components/facts/facts.component';
import { HistoryComponent } from './components/history/history.component';
import { HomeComponent } from './components/home/home.component';
import { OdditiesComponent } from './components/oddities/oddities.component';
import { QuotesComponent } from './components/quotes/quotes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'history',
    component: HistoryComponent,
    pathMatch: 'full',
  },
  {
    path: 'oddities',
    component: OdditiesComponent,
    pathMatch: 'full',
  },
  {
    path: 'facts',
    component: FactsComponent,
    pathMatch: 'full',
  },
  {
    path: 'quotes',
    component: QuotesComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
