import { Component, AfterViewInit, OnDestroy } from '@angular/core';
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
export class PortfolioNav implements AfterViewInit, OnDestroy {
  readonly links = LINKS;
  private observer?: IntersectionObserver;

  constructor(
    readonly theme: ThemeService,
    readonly state: PortfolioStateService,
  ) {}

  ngAfterViewInit(): void {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const sections = this.links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.state.setActiveSection(entry.target.id);
          }
        }
      },
      {
        rootMargin: '-30% 0px -50% 0px',
        threshold: 0,
      },
    );

    for (const section of sections) {
      this.observer.observe(section);
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  navigate(id: string): void {
    this.state.setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  openContact(): void {
    this.navigate('contact');
  }
}
