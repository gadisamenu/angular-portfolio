import { Component, HostListener } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleCheck, lucideClock3, lucideMapPin } from '@ng-icons/lucide';

import { PortfolioStateService } from '../../core/portfolio-state.service';

@Component({
  selector: 'app-availability-window',
  standalone: true,
  imports: [NgIcon],
  providers: [provideIcons({ lucideCircleCheck, lucideClock3, lucideMapPin })],
  templateUrl: './availability-window.html',
  styleUrl: './availability-window.scss',
})
export class AvailabilityWindow {
  constructor(readonly state: PortfolioStateService) {}

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close();
  }

  close(): void {
    this.state.closeWindow();
  }
}
