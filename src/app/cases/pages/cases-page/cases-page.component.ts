import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Case } from '../../../core/models/case.model';
import { CaseService } from '../../../core/services/case.service';
import { CaseCardComponent } from '../../components/case-card/case-card.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
@Component({
  selector: 'app-cases-page',
  standalone: true,
  imports: [NgFor, CaseCardComponent, RevealDirective],
  templateUrl: './cases-page.component.html',
  styleUrl: './cases-page.component.scss'
})
export class CasesPageComponent implements OnInit {
  cases: Case[] = [];
  constructor(private caseService: CaseService) { }
  ngOnInit(): void { this.caseService.getCases().subscribe(items => this.cases = items); }
}
