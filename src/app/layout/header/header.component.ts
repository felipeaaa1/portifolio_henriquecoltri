import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen = false;
  scrolled = false;
  onHome = true;
  readonly contactUrl: string;

  constructor(private router: Router, portfolioService: PortfolioService) {
    this.contactUrl = portfolioService.getWhatsappUrl();
    this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd)).subscribe(event => {
      this.onHome = event.urlAfterRedirects.split('#')[0] === '/';
      this.menuOpen = false;
    });
  }

  @HostListener('window:scroll')
  onWindowScroll(): void { this.scrolled = window.pageYOffset > 48; }

  @HostListener('document:keydown.escape')
  closeOnEscape(): void { this.closeMenu(); }

  toggleMenu(): void { this.menuOpen = !this.menuOpen; }
  closeMenu(): void { this.menuOpen = false; }
}
