import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideCode,
  lucideAtom,
  lucideHexagon,
  lucideFileCode2,
  lucideServer,
  lucideLayers,
  lucideBrainCircuit,
  lucideSmartphone,
  lucideDatabase,
  lucideLeaf,
  lucideContainer,
  lucideCloud,
  lucideGitBranch,
} from '@ng-icons/lucide';

import { PortfolioStateService } from '../../core/portfolio-state.service';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [NgIcon],
  providers: [
    provideIcons({
      lucideCode,
      lucideAtom,
      lucideHexagon,
      lucideFileCode2,
      lucideServer,
      lucideLayers,
      lucideBrainCircuit,
      lucideSmartphone,
      lucideDatabase,
      lucideLeaf,
      lucideContainer,
      lucideCloud,
      lucideGitBranch,
    }),
  ],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  constructor(readonly state: PortfolioStateService) {}
}
