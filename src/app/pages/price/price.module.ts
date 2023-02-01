import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceRoutingModule } from './price-routing.module';
import { PriceComponent } from './price.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { QuestionModule } from '../question/question.module';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { GalleryModule } from '../gallery/gallery.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@NgModule({
  declarations: [
    PriceComponent
  ],
  imports: [
    CommonModule,
    PriceRoutingModule,
    CarouselModule.forRoot(),
    QuestionModule,
    SharedModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ]
})
export class PriceModule { }
