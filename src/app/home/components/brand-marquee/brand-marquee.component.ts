import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Brand } from '../../../core/models/portfolio.model';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
@Component({
  selector: 'app-brand-marquee',
  standalone: true,
  imports: [NgFor, RevealDirective],
  templateUrl: './brand-marquee.component.html',
  styleUrl: './brand-marquee.component.scss'
})
export class BrandMarqueeComponent implements OnInit {
  brands: Brand[] = [];
  constructor(private portfolioService: PortfolioService) { }
  ngOnInit(): void { this.portfolioService.getBrands().subscribe(items => this.brands = items); }
}
