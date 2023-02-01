import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Page404Component } from './pages/page404/page404.component';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PriceComponent } from './pages/price/price.component';
import { QuestionComponent } from './pages/question/question.component';
import { AboutModule } from './pages/about/about.module';
import { HomeModule } from './pages/home/home.module';
import { GalleryModule } from './pages/gallery/gallery.module';
import { PriceModule } from './pages/price/price.module';
import { ContactModule } from './pages/contact/contact.module';
import { LogoComponent } from './pages/logo/logo.component';




const router: Route[] = [
  {
    path: 'home', 
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  // {
  //   path: 'home',
  //   component: HomeComponent
  // },
  {
    path: '', 
    redirectTo: 'home',
    pathMatch: "full"
  },
  {
    path: 'gallery',
    loadChildren: () => import('./pages/gallery/gallery.module').then(g => g.GalleryModule)
  },

  {
    path: 'price',
    loadChildren: () => import('./pages/price/price.module').then(p => p.PriceModule)
  },
  // {
  //   path: '', 
  //   redirectTo: 'price',
  //   pathMatch: "full"
  // },
  // {
  //   path: '',
  //   component: AboutComponent
  // },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(a => a.AboutModule)
  },
  {
    path: '', 
    redirectTo: 'about',
    pathMatch: "full"
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then(c => c.ContactModule)
  },
  {
    path: '', 
    redirectTo: 'contact',
    pathMatch: "full"
  },
  {
    path: '**',
    component: Page404Component
  }
]

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    LogoComponent
   
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    ReactiveFormsModule,
    HttpClientModule,
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    AboutModule,
    HomeModule,
    GalleryModule,
    PriceModule,
    ContactModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
