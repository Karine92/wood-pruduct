import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactModule } from '../contact/contact.module';
import { GalleryModule } from '../gallery/gallery.module';
import { AboutModule } from '../about/about.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { PriceModule } from '../price/price.module';
import { QuestionModule } from '../question/question.module';




@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        ReactiveFormsModule,
        CarouselModule.forRoot(),
        HttpClientModule,
        SharedModule,
        ContactModule,
        GalleryModule,
        AboutModule,
        PriceModule,
        QuestionModule
    ]
})
export class HomeModule{
  
 }
