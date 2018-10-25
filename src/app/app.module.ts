import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//Servicios
import { RazaService } from './services/raza.service';

// Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import { MaterialModule } from './material';
import { NavigationBarComponent } from './components/shared/navigation-bar/navigation-bar.component';
import { PetRegistrationComponent } from './components/pet-registration/pet-registration.component';

// select2
import { Select2Module } from 'ng2-select2';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    PetRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    Select2Module
  ],
  providers: [
    RazaService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
