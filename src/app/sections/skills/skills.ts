import { Component, computed, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideCode,
  lucideLayout,
  lucideServer,
  lucideDatabase,
  lucideCpu,
  lucideAtom,
  lucideHexagon,
  lucideLayers,
  lucideFileCode2,
  lucideSmartphone,
  lucideBrainCircuit,
  lucideContainer,
  lucideCloud,
  lucideGitBranch,
  lucideLeaf,
  lucideSparkles,
} from '@ng-icons/lucide';

import {
  PortfolioStateService,
  SkillCategory,
  SkillCategoryInfo,
  SkillItem,
} from '../../core/portfolio-state.service';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [NgIcon],
  providers: [
    provideIcons({
      lucideCode,
      lucideLayout,
      lucideServer,
      lucideDatabase,
      lucideCpu,
      lucideAtom,
      lucideHexagon,
      lucideLayers,
      lucideFileCode2,
      lucideSmartphone,
      lucideBrainCircuit,
      lucideContainer,
      lucideCloud,
      lucideGitBranch,
      lucideLeaf,
      lucideSparkles,
    }),
  ],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  readonly activeFilter = signal<string>('all');

  readonly categories = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'all') {
      return this.state.skillCategories;
    }
    return this.state.skillCategories.filter((c) => c.id === filter);
  });

  constructor(readonly state: PortfolioStateService) {}

  getSkillsForCategory(categoryId: SkillCategory): SkillItem[] {
    return this.state.skills.filter((s) => s.category === categoryId);
  }

  setFilter(categoryId: string): void {
    this.activeFilter.set(categoryId);
  }
}
