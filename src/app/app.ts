import { Component, HostListener, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from './layout/menu-bar/menu-bar';
import { PorfolioStateService } from './core/portfolio-state.service';
import { ThemeService } from './core/theme.servie';

@Component({
  imports: [
    // RouterOutlet,
    MenuBarComponent,
  ],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  readonly state = inject(PorfolioStateService);
  readonly theme = inject(ThemeService)

  protected readonly title = signal('portfolio');

  @HostListener('document:click')
  closeMenu(){
    this.state.closeMenus();
  }
}
