import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  NgZone,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  templateUrl: './back-to-top.component.html',
  styleUrl: './back-to-top.component.scss'
})
export class BackToTopComponent implements AfterViewInit, OnDestroy {

  visible = false;

  private readonly handleScroll = (): void => {
    const scrollTop = Math.max(
      window.scrollY || 0,
      document.documentElement.scrollTop || 0,
      document.body.scrollTop || 0
    );

    const nextVisible = scrollTop > 450;

    if (nextVisible !== this.visible) {
      this.visible = nextVisible;

      this.zone.run(() => {
        this.changeDetector.detectChanges();
      });
    }
  };

  constructor(
    private readonly zone: NgZone,
    private readonly changeDetector: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') {
      return;
    }

    window.addEventListener(
      'scroll',
      this.handleScroll,
      true
    );

    this.handleScroll();
  }

  ngOnDestroy(): void {
    if (typeof window === 'undefined') {
      return;
    }

    window.removeEventListener(
      'scroll',
      this.handleScroll,
      true
    );
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}