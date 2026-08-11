import { Component, OnInit } from '@angular/core';
import { Testimonial } from '../../../core/models/portfolio.model';
import { PortfolioService } from '../../../core/services/portfolio.service';
@Component({ selector: 'app-testimonials', templateUrl: './testimonials.component.html', styleUrls: ['./testimonials.component.scss'] })
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [];
  activeIndex = 0;
  constructor(private portfolioService: PortfolioService) { }
  ngOnInit(): void { this.portfolioService.getTestimonials().subscribe(items => this.testimonials = items); }
  previous(): void { this.activeIndex = (this.activeIndex - 1 + this.testimonials.length) % this.testimonials.length; }
  next(): void { this.activeIndex = (this.activeIndex + 1) % this.testimonials.length; }
  select(index: number): void { this.activeIndex = index; }
}
