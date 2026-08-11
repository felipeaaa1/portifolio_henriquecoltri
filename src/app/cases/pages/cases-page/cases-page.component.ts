import { Component, OnInit } from '@angular/core';
import { Case } from '../../../core/models/case.model';
import { CaseService } from '../../../core/services/case.service';
@Component({ selector: 'app-cases-page', templateUrl: './cases-page.component.html', styleUrls: ['./cases-page.component.scss'] })
export class CasesPageComponent implements OnInit {
  cases: Case[] = [];
  constructor(private caseService: CaseService) { }
  ngOnInit(): void { this.caseService.getCases().subscribe(items => this.cases = items); }
}
