import { Component, HostListener } from '@angular/core';

import { PortfolioStateService } from '../../core/portfolio-state.service';

@Component({
  selector: 'app-preview-window',
  standalone: true,
  templateUrl: './preview-window.html',
  styleUrl: './preview-window.scss',
})
export class PreviewWindow {
  constructor(readonly state: PortfolioStateService) {}

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close();
  }

  close(): void {
    this.state.closeWindow();
  }
}
