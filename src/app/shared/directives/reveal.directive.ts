import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, Renderer2 } from '@angular/core';

export type RevealAnimation = 'fade-up' | 'slide-left' | 'slide-right' | 'scale' | 'tilt' | 'clip';

@Directive({
  selector: '[appReveal]'
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  @Input('appReveal') animation: RevealAnimation = 'fade-up';
  @Input() revealDelay = 0;

  private observer: IntersectionObserver;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    const element = this.elementRef.nativeElement;
    this.renderer.addClass(element, 'reveal');
    this.renderer.addClass(element, 'reveal--' + this.animation);
    this.renderer.setStyle(element, '--reveal-delay', this.revealDelay + 'ms');

    if (typeof IntersectionObserver === 'undefined') {
      this.showElement();
      return;
    }

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.showElement();
          this.observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private showElement(): void {
    this.renderer.addClass(this.elementRef.nativeElement, 'reveal--visible');
  }
}
