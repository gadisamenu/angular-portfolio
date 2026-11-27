import { Component, computed, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideMonitor,
  lucideChevronLeft,
  lucideChevronRight,
  lucideArrowRight,
  lucideExternalLink,
  lucideLayers,
  lucideLock,
} from '@ng-icons/lucide';

import { PortfolioStateService, Project } from '../../core/portfolio-state.service';

const VISIBLE_COUNT = 3;

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgIcon],
  providers: [
    provideIcons({
      lucideMonitor,
      lucideChevronLeft,
      lucideChevronRight,
      lucideArrowRight,
      lucideExternalLink,
      lucideLayers,
      lucideLock,
    }),
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  readonly startIndex = signal(0);

  readonly visibleProjects = computed<Project[]>(() => {
    const all = this.state.projects;
    const start = this.startIndex();
    return Array.from(
      { length: Math.min(VISIBLE_COUNT, all.length) },
      (_, i) => all[(start + i) % all.length],
    );
  });

  constructor(readonly state: PortfolioStateService) {}

  prev(): void {
    const total = this.state.projects.length;
    this.startIndex.update((i) => (i - 1 + total) % total);
  }

  next(): void {
    const total = this.state.projects.length;
    this.startIndex.update((i) => (i + 1) % total);
  }

  goToIndex(index: number): void {
    this.startIndex.set(index);
  }

  openProject(project: Project): void {
    this.state.openProject(project);
  }

  viewAll(): void {
    this.state.openWindow('finder');
  }
}
