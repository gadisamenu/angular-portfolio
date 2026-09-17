import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideUser,
  lucideBriefcase,
  lucideGraduationCap,
  lucideBinary,
  lucideCircleDot,
} from '@ng-icons/lucide';

import { PortfolioStateService } from '../../core/portfolio-state.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgIcon],
  providers: [
    provideIcons({ lucideUser, lucideBriefcase, lucideGraduationCap, lucideBinary, lucideCircleDot }),
  ],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  constructor(readonly state: PortfolioStateService) {}
}
