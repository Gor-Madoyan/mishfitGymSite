import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { AboutModule } from '../about/about.module';
import { ServiceModule } from '../service/service.module';
import { NewsModule } from '../news/news.module';
import { TrainerModule } from '../trainer/trainer.module';
import { GalleryModule } from '../gallery/gallery.module';
import { ContactModule } from '../contact/contact.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AboutModule,
    ServiceModule,
    NewsModule,
    TrainerModule,
    GalleryModule,
    ContactModule
  ]
})
export class HomeModule { }
