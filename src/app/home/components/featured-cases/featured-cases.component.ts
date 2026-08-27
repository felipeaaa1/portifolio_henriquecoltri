import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Case } from '../../../core/models/case.model';
import { CaseService } from '../../../core/services/case.service';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
@Component({
  selector: 'app-featured-cases',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, SectionTitleComponent, RevealDirective],
  templateUrl: './featured-cases.component.html',
  styleUrl: './featured-cases.component.scss'
})
export class FeaturedCasesComponent implements OnInit {
  cases: Case[] = [];
  constructor(private caseService: CaseService) { }
  ngOnInit(): void { this.caseService.getFeaturedCases().subscribe(items => this.cases = items); }
}
