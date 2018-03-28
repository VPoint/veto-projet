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

import {AppComponent} from './app.component';
import { TraitementComponent } from './traitement/traitement.component';
import { CliniqueComponent } from './clinique/clinique.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { RequestComponent } from './request/request.component';
import { HomeComponent } from './home/home.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {routing} from './app.routing';
import {HttpClientModule} from "@angular/common/http";
import {DatabaseService} from "./database/database.service";


@NgModule({
  declarations: [
    AppComponent,
    TraitementComponent,
    CliniqueComponent,
    PersonnelComponent,
    RequestComponent,
    HomeComponent
  ],
  imports: [
    routing,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatTabsModule,
    MatTableModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
