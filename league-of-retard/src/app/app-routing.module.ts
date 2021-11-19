import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConnexionComponent} from "./pages/connexion/connexion.component";
import {InscriptionComponent} from "./pages/inscription/inscription.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {UserProfilComponent} from "./pages/user-profil/user-profil.component";
import {RechercheComponent} from "./pages/recherche/recherche.component";
import { AuthGuard } from './auth.guard';
import {NotFound404Component} from "./pages/not-found404/not-found404.component";
import {HistoryComponent} from "./pages/history/history.component";

const routes: Routes = [

  {path: '', component: HomePageComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'profil', component: UserProfilComponent, canActivate:[AuthGuard]},
  {path: 'history', component: HistoryComponent, canActivate:[AuthGuard]},
  {path: 'recherche', component: RechercheComponent, canActivate:[AuthGuard]},
  {path: '404NotFound', component: NotFound404Component},
  {path: '', redirectTo: 'profil', pathMatch: 'full'},
  {path: '**', redirectTo: '404NotFound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
