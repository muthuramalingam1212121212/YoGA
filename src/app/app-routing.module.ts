import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from '../app/about-us/about-us.component';
import { HomeComponent } from '../app/home/home.component';
import { ContactUsComponent } from '../app/contact-us/contact-us.component';
import { GalleryComponent } from '../app/gallery/gallery.component';

const routes: Routes = [
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect empty path to 'home'
  { path: 'home', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
