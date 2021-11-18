import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConnexionComponent} from "./pages/connexion/connexion.component";
import {InscriptionComponent} from "./pages/inscription/inscription.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [

  {path: '', component: HomePageComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'profile', component: ProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
