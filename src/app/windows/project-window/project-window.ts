import { Component, HostListener, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowLeft, lucideChevronLeft, lucideChevronRight, lucideExternalLink, lucideLock } from '@ng-icons/lucide';
import { ionLogoGithub } from '@ng-icons/ionicons';

import { PortfolioStateService, Project } from '../../core/portfolio-state.service';

@Component({
  selector: 'app-project-window',
  standalone: true,
  imports: [NgIcon],
  providers: [provideIcons({ lucideArrowLeft, lucideChevronLeft, lucideChevronRight, lucideExternalLink, lucideLock, ionLogoGithub })],
  templateUrl: './project-window.html',
  styleUrl: './project-window.scss',
})
export class ProjectWindow {
  private readonly imageIndices = signal<Record<string, number>>({});

  constructor(readonly state: PortfolioStateService) {}

  imageIndex(project: Project): number {
    return this.imageIndices()[project.id] ?? 0;
  }

  changeImage(project: Project, direction: number): void {
    const imageCount = project.images?.length ?? 0;
    if (imageCount < 2) return;
    this.imageIndices.update((indices) => ({
      ...indices,
      [project.id]: (this.imageIndex(project) + direction + imageCount) % imageCount,
    }));
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
