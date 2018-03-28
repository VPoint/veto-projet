import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PersonnelComponent} from './personnel/personnel.component';
import {CliniqueComponent} from './clinique/clinique.component';
import {RequestComponent} from './request/request.component';
import {TraitementComponent} from './traitement/traitement.component';

const appRoutes: Routes = [
  {path: 'request', component: RequestComponent},
  {path: 'clinique', component: CliniqueComponent},
  {path: 'home', component: HomeComponent},
  {path: 'personnel', component: PersonnelComponent},
  {path: 'traitement', component: TraitementComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: HomeComponent}
];

export const routing = RouterModule.forRoot(
  appRoutes,
  {enableTracing: true} // <-- debugging purposes only
);
