import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementFormComponent } from './announcement-form/announcement-form.component';
import { ProfileComponent } from './profile/profile.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{path: 'announcement-form', component: AnnouncementFormComponent },
{ path: 'profile', component: ProfileComponent },
{ path: 'home', component: HomeComponent },
{ path: 'announcements', component: AnnouncementsComponent },
{path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
