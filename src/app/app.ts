import {Component, signal} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly currentYear = new Date().getFullYear();
  
  protected readonly isMobileMenuOpen = signal(false);
  
  protected toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(value => !value);
  }
  
  protected closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}
