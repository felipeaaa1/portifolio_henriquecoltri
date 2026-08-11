import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeroComponent } from './components/hero/hero.component';
import { PositioningComponent } from './components/positioning/positioning.component';
import { ServicesGridComponent } from './components/services-grid/services-grid.component';
import { MethodStepsComponent } from './components/method-steps/method-steps.component';
import { FeaturedCasesComponent } from './components/featured-cases/featured-cases.component';
import { AboutComponent } from './components/about/about.component';
import { ManifestoComponent } from './components/manifesto/manifesto.component';
import { BrandMarqueeComponent } from './components/brand-marquee/brand-marquee.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactCtaComponent } from './components/contact-cta/contact-cta.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomePageComponent, HeroComponent, PositioningComponent, ServicesGridComponent,
    MethodStepsComponent, FeaturedCasesComponent, AboutComponent, ManifestoComponent,
    BrandMarqueeComponent, TestimonialsComponent, ContactCtaComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class HomeModule { }
