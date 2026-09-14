import { Component, HostListener } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowLeft, lucideExternalLink, lucideLock } from '@ng-icons/lucide';
import { ionLogoGithub } from '@ng-icons/ionicons';

import { PortfolioStateService } from '../../core/portfolio-state.service';

@Component({
  selector: 'app-project-window',
  standalone: true,
  imports: [NgIcon],
  providers: [provideIcons({ lucideArrowLeft, lucideExternalLink, lucideLock, ionLogoGithub })],
  templateUrl: './project-window.html',
  styleUrl: './project-window.scss',
})
export class ProjectWindow {
  constructor(readonly state: PortfolioStateService) {}

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
