import { Component, HostListener, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideArrowLeft,
  lucideChevronLeft,
  lucideChevronRight,
  lucideExternalLink,
  lucideLock,
  lucideCheckCircle2,
  lucideMaximize2,
  lucideMinimize2,
  lucideLayers,
  lucideCalendar,
  lucideBriefcase,
} from '@ng-icons/lucide';
import { ionLogoGithub } from '@ng-icons/ionicons';

import { PortfolioStateService, Project } from '../../core/portfolio-state.service';

@Component({
  selector: 'app-project-window',
  standalone: true,
  imports: [NgIcon],
  providers: [
    provideIcons({
      lucideArrowLeft,
      lucideChevronLeft,
      lucideChevronRight,
      lucideExternalLink,
      lucideLock,
      lucideCheckCircle2,
      lucideMaximize2,
      lucideMinimize2,
      lucideLayers,
      lucideCalendar,
      lucideBriefcase,
      ionLogoGithub,
    }),
  ],
  templateUrl: './project-window.html',
  styleUrl: './project-window.scss',
})
export class ProjectWindow {
  private readonly imageIndices = signal<Record<string, number>>({});
  readonly isMaximized = signal(false);

  constructor(readonly state: PortfolioStateService) {}

  imageIndex(project: Project): number {
    return this.imageIndices()[project.id] ?? 0;
  }

  setImageIndex(project: Project, index: number): void {
    this.imageIndices.update((indices) => ({
      ...indices,
      [project.id]: index,
    }));
  }

  changeImage(project: Project, direction: number): void {
    const imageCount = project.images?.length ?? 0;
    if (imageCount < 2) return;
    this.imageIndices.update((indices) => ({
      ...indices,
      [project.id]: (this.imageIndex(project) + direction + imageCount) % imageCount,
    }));
  }

  prevProject(): void {
    const current = this.state.activeProject();
    if (!current) return;
    const all = this.state.projects;
    const idx = all.findIndex((p) => p.id === current.id);
    const prevIdx = (idx - 1 + all.length) % all.length;
    this.state.openProject(all[prevIdx]);
  }

  nextProject(): void {
    const current = this.state.activeProject();
    if (!current) return;
    const all = this.state.projects;
    const idx = all.findIndex((p) => p.id === current.id);
    const nextIdx = (idx + 1) % all.length;
    this.state.openProject(all[nextIdx]);
  }

  toggleMaximize(): void {
    this.isMaximized.update((v) => !v);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close();
  }

  close(): void {
    this.state.closeWindow();
  }

  backToAll(): void {
    this.state.openWindow('finder');
  }
}
