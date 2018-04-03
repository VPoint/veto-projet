import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PersonnelComponent} from './personnel/personnel.component';
import {CliniqueComponent} from './clinique/clinique.component';
import {RequestComponent} from './request/request.component';
import {AnimalFormComponent} from './animal-form/animal-form.component';
import {AnimalViewComponent} from './animal-view/animal-view.component';
import {ProprietaireComponent} from "./proprietaire/proprietaire.component";
import {AnimalComponent} from "./animal/animal.component";

const appRoutes: Routes = [
  {path: 'request', component: RequestComponent},
  {path: 'clinique', component: CliniqueComponent},
  {path: 'home', component: HomeComponent},
  {path: 'personnel', component: PersonnelComponent},
  {path: 'proprietaire', component: ProprietaireComponent},
  {path: 'animal', component: AnimalComponent},
  {path: 'animal/:id', component: AnimalViewComponent},
  {path: 'new-animal', component: AnimalFormComponent},
  {path: 'edit-animal/:id', component: AnimalFormComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: HomeComponent}
];

export const routing = RouterModule.forRoot(
  appRoutes
);
