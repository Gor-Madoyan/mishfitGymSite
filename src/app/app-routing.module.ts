import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: 'about',   loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
{ path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
{ path: 'news',    loadChildren: () => import('./news/news.module').then(m => m.NewsModule) },
{ path: 'service', loadChildren: () => import('./service/service.module').then(m => m.ServiceModule) },
{ path: 'trainer', loadChildren: () => import('./trainer/trainer.module').then(m => m.TrainerModule) },
{ path: 'gallery', loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule) },
{ path: 'home',    loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
