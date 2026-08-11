import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Testimonial } from '../../../core/models/portfolio.model';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [NgFor, NgIf, SectionTitleComponent, RevealDirective],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [];
  activeIndex = 0;
  constructor(private portfolioService: PortfolioService) { }
  ngOnInit(): void { this.portfolioService.getTestimonials().subscribe(items => this.testimonials = items); }
  previous(): void { this.activeIndex = (this.activeIndex - 1 + this.testimonials.length) % this.testimonials.length; }
  next(): void { this.activeIndex = (this.activeIndex + 1) % this.testimonials.length; }
  select(index: number): void { this.activeIndex = index; }
}
