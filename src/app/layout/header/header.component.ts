import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({ selector: 'app-header', templateUrl: './header.component.html', styleUrls: ['./header.component.scss'] })
export class HeaderComponent {
  menuOpen = false;
  scrolled = false;
  onHome = true;

  constructor(private router: Router) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
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
