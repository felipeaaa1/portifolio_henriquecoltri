import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HeaderComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open and close the mobile menu', () => {
    expect(component.menuOpen).toBe(false);
    component.toggleMenu();
    expect(component.menuOpen).toBe(true);
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('.menu-button');
    expect(button.getAttribute('aria-expanded')).toBe('true');
    component.closeMenu();
    expect(component.menuOpen).toBe(false);
  });
});
