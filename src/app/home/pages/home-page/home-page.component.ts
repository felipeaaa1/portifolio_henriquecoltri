import { Component } from '@angular/core';
import { AboutComponent } from '../../components/about/about.component';
import { BrandMarqueeComponent } from '../../components/brand-marquee/brand-marquee.component';
import { ContactCtaComponent } from '../../components/contact-cta/contact-cta.component';
import { FeaturedCasesComponent } from '../../components/featured-cases/featured-cases.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { ManifestoComponent } from '../../components/manifesto/manifesto.component';
import { MethodStepsComponent } from '../../components/method-steps/method-steps.component';
import { PositioningComponent } from '../../components/positioning/positioning.component';
import { ServicesGridComponent } from '../../components/services-grid/services-grid.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeroComponent, PositioningComponent, ServicesGridComponent, MethodStepsComponent,
    FeaturedCasesComponent, AboutComponent, ManifestoComponent, BrandMarqueeComponent,
    TestimonialsComponent, ContactCtaComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent { }
