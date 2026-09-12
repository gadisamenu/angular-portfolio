import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight, lucideMail, lucideBinary } from '@ng-icons/lucide';
import { ionLogoGithub, ionLogoLinkedin } from '@ng-icons/ionicons';

import { PortfolioStateService } from '../../core/portfolio-state.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgIcon],
  providers: [
    provideIcons({ lucideArrowRight, lucideMail, lucideBinary, ionLogoGithub, ionLogoLinkedin }),
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  constructor(readonly state: PortfolioStateService) {}

  viewWork(): void {
    this.state.openWindow('finder');
  }

  downloadResume(): void {
    this.state.openWindow('resume');
  }

  showAvailability(): void {
    this.state.openWindow('availability');
  }
}
