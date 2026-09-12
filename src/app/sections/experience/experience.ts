import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBriefcase } from '@ng-icons/lucide';

import { PortfolioStateService } from '../../core/portfolio-state.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgIcon],
  providers: [provideIcons({ lucideBriefcase })],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  constructor(readonly state: PortfolioStateService) {}
}
