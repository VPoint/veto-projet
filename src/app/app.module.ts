import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {AppComponent} from './app.component';
import { CliniqueComponent } from './clinique/clinique.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { RequestComponent } from './request/request.component';
import { HomeComponent } from './home/home.component';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import { AnimalViewComponent } from './animal-view/animal-view.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {routing} from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import {DatabaseService} from './database/database.service';
import { ExamenFormComponent } from './examen-form/examen-form.component';
import { CliniqueFormComponent } from './clinique-form/clinique-form.component';
import { PersonnelFormComponent } from './personnel-form/personnel-form.component';
import { ProprietaireFormComponent } from './proprietaire-form/proprietaire-form.component';
import { ProprietaireComponent } from './proprietaire/proprietaire.component';
import { AnimalComponent } from './animal/animal.component';
import {MatNativeDateModule} from "@angular/material";


@NgModule({
  declarations: [
    AppComponent,
    CliniqueComponent,
    PersonnelComponent,
    RequestComponent,
    HomeComponent,
    AnimalFormComponent,
    AnimalViewComponent,
    ExamenFormComponent,
    CliniqueFormComponent,
    PersonnelFormComponent,
    ProprietaireFormComponent,
    ProprietaireComponent,
    AnimalComponent
  ],
  imports: [
    routing,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatToolbarModule,
    MatMenuModule,
    MatTabsModule,
    MatTableModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
