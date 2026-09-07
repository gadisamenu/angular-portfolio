import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  readonly isDark = signal(true);

  constructor() {
    this.applyTheme();
  }

  toggle(): void {
    this.isDark.update(value => !value);
    this.applyTheme();
  }

  private applyTheme(): void {
    document.documentElement.setAttribute(
      'data-theme',
      this.isDark() ? 'dark' : 'light'
    );
  }
}