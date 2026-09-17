import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideSun, lucideMoon, lucideArrowRight } from '@ng-icons/lucide';

import { ThemeService } from '../../core/theme.service';
import { PortfolioStateService } from '../../core/portfolio-state.service';

interface NavLink {
  id: string;
  label: string;
}

const LINKS: NavLink[] = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

@Component({
  selector: 'app-portfolio-nav',
  standalone: true,
  imports: [NgIcon],
  providers: [provideIcons({ lucideSun, lucideMoon, lucideArrowRight })],
  templateUrl: './portfolio-nav.html',
  styleUrl: './portfolio-nav.scss',
})
export class PortfolioNav {
  readonly links = LINKS;

  constructor(
    readonly theme: ThemeService,
    readonly state: PortfolioStateService,
  ) {}

  navigate(id: string): void {
    this.state.setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  openContact(): void {
    this.navigate('contact');
  }
}
