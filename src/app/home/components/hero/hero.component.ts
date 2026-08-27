import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  moveGlow(event: PointerEvent): void {
    const hero = event.currentTarget as HTMLElement;
    const bounds = hero.getBoundingClientRect();
    const x = Math.min(1, Math.max(0, (event.clientX - bounds.left) / bounds.width));
    const y = Math.min(1, Math.max(0, (event.clientY - bounds.top) / bounds.height));
    const horizontal = x - .5;
    const vertical = y - .5;

    hero.style.setProperty('--shape-one-x', `${horizontal * 88}px`);
    hero.style.setProperty('--shape-one-y', `${vertical * 64}px`);
    hero.style.setProperty('--shape-two-x', `${horizontal * -64}px`);
    hero.style.setProperty('--shape-two-y', `${vertical * -48}px`);
    hero.style.setProperty('--shape-three-x', `${horizontal * 42}px`);
    hero.style.setProperty('--shape-three-y', `${vertical * -74}px`);
    hero.style.setProperty('--shape-four-x', `${horizontal * -35}px`);
    hero.style.setProperty('--shape-four-y', `${vertical * 55}px`);
    hero.style.setProperty('--shape-one-radius', `${42 + x * 16}% ${58 - y * 15}% ${45 + y * 17}% ${55 - x * 14}%`);
    hero.style.setProperty('--shape-two-radius', `${55 - y * 17}% ${45 + x * 15}% ${58 - x * 18}% ${42 + y * 16}%`);
  }
}
