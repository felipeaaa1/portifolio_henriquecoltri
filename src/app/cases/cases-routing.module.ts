import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CasesPageComponent } from './pages/cases-page/cases-page.component';


const routes: Routes = [{ path: '', component: CasesPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasesRoutingModule { }
