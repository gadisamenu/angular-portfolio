import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideBriefcase,
  lucideGraduationCap,
  lucideCalendar,
  lucideMapPin,
  lucideCheckCircle2,
  lucideAward,
  lucideSparkles,
} from '@ng-icons/lucide';

import { PortfolioStateService } from '../../core/portfolio-state.service';

export type ExperienceTab = 'work' | 'education';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgIcon],
  providers: [
    provideIcons({
      lucideBriefcase,
      lucideGraduationCap,
      lucideCalendar,
      lucideMapPin,
      lucideCheckCircle2,
      lucideAward,
      lucideSparkles,
    }),
  ],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  readonly activeTab = signal<ExperienceTab>('work');

  constructor(readonly state: PortfolioStateService) {}

  setTab(tab: ExperienceTab): void {
    this.activeTab.set(tab);
  }
}
