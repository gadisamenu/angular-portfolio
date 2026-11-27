import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideUser,
  lucideGraduationCap,
  lucideBriefcase,
  lucideBinary,
  lucideCircleDot,
  lucideServer,
  lucideLayout,
  lucideCpu,
  lucideArrowRight,
  lucideSparkles,
} from '@ng-icons/lucide';

import { PortfolioStateService } from '../../core/portfolio-state.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgIcon],
  providers: [
    provideIcons({
      lucideUser,
      lucideGraduationCap,
      lucideBriefcase,
      lucideBinary,
      lucideCircleDot,
      lucideServer,
      lucideLayout,
      lucideCpu,
      lucideArrowRight,
      lucideSparkles,
    }),
  ],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  constructor(readonly state: PortfolioStateService) {}

  openAvailability(): void {
    this.state.openWindow('availability');
  }

  openResume(): void {
    this.state.openWindow('resume');
  }
}
