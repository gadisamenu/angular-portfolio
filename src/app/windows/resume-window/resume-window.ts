import { Component, HostListener } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideDownload, lucidePrinter } from '@ng-icons/lucide';

import { PortfolioStateService } from '../../core/portfolio-state.service';

@Component({
  selector: 'app-resume-window',
  standalone: true,
  imports: [NgIcon],
  providers: [provideIcons({ lucideDownload, lucidePrinter })],
  templateUrl: './resume-window.html',
  styleUrl: './resume-window.scss',
})
export class ResumeWindow {
  constructor(readonly state: PortfolioStateService) {}

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close();
  }

  close(): void {
    this.state.closeWindow();
  }
}
