import { Component, HostListener } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideFolder,
  lucideStar,
  lucideClock,
  lucideLayoutGrid,
  lucideList,
  lucideX,
} from '@ng-icons/lucide';

import { PortfolioStateService, Project } from '../../core/portfolio-state.service';

@Component({
  selector: 'app-finder-window',
  standalone: true,
  imports: [NgIcon],
  providers: [
    provideIcons({ lucideFolder, lucideStar, lucideClock, lucideLayoutGrid, lucideList, lucideX }),
  ],
  templateUrl: './finder-window.html',
  styleUrl: './finder-window.scss',
})
export class FinderWindow {
  constructor(readonly state: PortfolioStateService) {}

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close();
  }

  close(): void {
    this.state.closeWindow();
  }

  select(project: Project): void {
    this.state.openProject(project);
  }
}
