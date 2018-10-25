import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetRegistrationComponent } from './components/pet-registration/pet-registration.component';

const routes: Routes = [

  { path: 'home', component: PetRegistrationComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
