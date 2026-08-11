import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';
import { RevealDirective } from './directives/reveal.directive';



@NgModule({
  declarations: [SectionTitleComponent, SocialLinksComponent, WhatsappButtonComponent, RevealDirective],
  imports: [
    CommonModule
  ],
  exports: [SectionTitleComponent, SocialLinksComponent, WhatsappButtonComponent, RevealDirective]
})
export class SharedModule { }
