import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PersonnelComponent} from './personnel/personnel.component';
import {CliniqueComponent} from './clinique/clinique.component';
import {RequestComponent} from './request/request.component';
import {AnimalFormComponent} from './animal-form/animal-form.component';
import {AnimalViewComponent} from './animal-view/animal-view.component';
import {ProprietaireComponent} from './proprietaire/proprietaire.component';
import {AnimalComponent} from './animal/animal.component';
import {ProprietaireFormComponent} from './proprietaire-form/proprietaire-form.component';
import {PersonnelFormComponent} from './personnel-form/personnel-form.component';
import {CliniqueFormComponent} from './clinique-form/clinique-form.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'request', component: RequestComponent},
  {path: 'clinique', component: CliniqueComponent},
  {path: 'new-clinique', component: CliniqueFormComponent},
  {path: 'personnel', component: PersonnelComponent},
  {path: 'new-personnel', component: PersonnelFormComponent},
  {path: 'proprietaire', component: ProprietaireComponent},
  {path: 'new-proprietaire', component: ProprietaireFormComponent},
  {path: 'animal', component: AnimalComponent},
  {path: 'animal/:cliniqueid/:id', component: AnimalViewComponent},
  {path: 'new-animal', component: AnimalFormComponent},
  {path: 'edit-animal/:cliniqueid/:id', component: AnimalFormComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: HomeComponent}
];

export const routing = RouterModule.forRoot(
  appRoutes
);
