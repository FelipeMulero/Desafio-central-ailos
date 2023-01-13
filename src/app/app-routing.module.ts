import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './views/users/user.component';
import { HomeComponent } from './views/home/home.component';
import { FavoriteComponent } from './views/favorite/favorite.component';
import { MessagesComponent } from './views/messages/messages.component';
import { AccountComponent } from './views/account/account.component';
import { SettingsComponent } from './views/settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: HomeComponent },
  { path: 'user/:cpf', component: UserComponent },
  { path: 'favorite', component: FavoriteComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'account', component: AccountComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
