import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './login/register/register.component';
import { LogincComponent } from './login/loginc/loginc.component';
import { GalleryComponent } from './media/gallery/gallery.component';
import { MymediaComponent } from './media/mymedia/mymedia.component';
import { UploadmediaComponent } from './media/uploadmedia/uploadmedia.component';
import { MultimediaComponent } from './media/multimedia/multimedia.component';
import { SinglemediaComponent } from './media/singlemedia/singlemedia.component';
import { FollowersComponent } from './media/followers/followers.component';
import { AccountComponent } from './account/account.component';


const routes: Routes = [
  { path:"", redirectTo : "login", pathMatch: "full"},
  { path:"register", component: RegisterComponent},
  { path:"login", component: LogincComponent},
  { path:"gallery", component: GalleryComponent},
  { path:"mymedia", component: MymediaComponent},
  { path:"uploadmedia", component: UploadmediaComponent},
  {path:"followers", component: FollowersComponent},
  { path:"multimedia", component: MultimediaComponent},
  { path:"single-media", component: SinglemediaComponent},
  { path:"account", component: AccountComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
