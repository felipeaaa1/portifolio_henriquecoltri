import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasesRoutingModule } from './cases-routing.module';
import { CasesPageComponent } from './pages/cases-page/cases-page.component';
import { CaseCardComponent } from './components/case-card/case-card.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CasesPageComponent, CaseCardComponent],
  imports: [
    CommonModule,
    CasesRoutingModule,
    SharedModule
  ]
})
export class CasesModule { }
