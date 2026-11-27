import { Component, HostListener, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideFolder,
  lucideStar,
  lucideLayoutGrid,
  lucideList,
  lucideX,
  lucideSearch,
  lucideArrowRight,
  lucideExternalLink,
  lucideCalendar,
  lucideServer,
  lucideLayout,
  lucideSmartphone,
  lucideChevronLeft,
  lucideChevronRight,
} from '@ng-icons/lucide';

import { PortfolioStateService, Project } from '../../core/portfolio-state.service';

export type FinderViewMode = 'grid' | 'list';

export interface FinderSidebarItem {
  id: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-finder-window',
  standalone: true,
  imports: [NgIcon, FormsModule],
  providers: [
    provideIcons({
      lucideFolder,
      lucideStar,
      lucideLayoutGrid,
      lucideList,
      lucideX,
      lucideSearch,
      lucideArrowRight,
      lucideExternalLink,
      lucideCalendar,
      lucideServer,
      lucideLayout,
      lucideSmartphone,
      lucideChevronLeft,
      lucideChevronRight,
    }),
  ],
  templateUrl: './finder-window.html',
  styleUrl: './finder-window.scss',
})
export class FinderWindow {
  readonly viewMode = signal<FinderViewMode>('grid');
  readonly selectedCategory = signal<string>('all');
  readonly searchQuery = signal<string>('');
  readonly isMaximized = signal<boolean>(false);

  readonly sidebarItems: FinderSidebarItem[] = [
    { id: 'all', label: 'All Projects', icon: 'lucideFolder' },
    { id: 'web', label: 'Full-Stack & Web', icon: 'lucideLayout' },
    { id: 'backend', label: 'Backend & Cloud', icon: 'lucideServer' },
    { id: 'mobile', label: 'Mobile & Apps', icon: 'lucideSmartphone' },
    { id: 'web3', label: 'Web3 & Capstone', icon: 'lucideStar' },
  ];

  readonly selectedCategoryTitle = computed(() => {
    const item = this.sidebarItems.find((s) => s.id === this.selectedCategory());
    return item ? item.label : 'All Projects';
  });

  readonly filteredProjects = computed<Project[]>(() => {
    let list = this.state.projects;
    const cat = this.selectedCategory();
    const query = this.searchQuery().trim().toLowerCase();

    // Category filter
    if (cat !== 'all') {
      if (cat === 'web') {
        list = list.filter((p) => p.category.includes('Full-Stack') || p.category.includes('eCommerce') || p.category.includes('Enterprise'));
      } else if (cat === 'backend') {
        list = list.filter((p) => p.category.includes('Healthcare') || p.category.includes('Cloud') || p.tags.includes('Express') || p.tags.includes('GCP'));
      } else if (cat === 'mobile') {
        list = list.filter((p) => p.category.includes('Mobile') || p.tags.includes('Flutter'));
      } else if (cat === 'web3') {
        list = list.filter((p) => p.category.includes('Web3') || p.tags.includes('Blockchain'));
      }
    }

    // Search query filter
    if (query) {
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.role.toLowerCase().includes(query) ||
          p.company.toLowerCase().includes(query) ||
          p.tags.some((t) => t.toLowerCase().includes(query)),
      );
    }

    return list;
  });

  constructor(readonly state: PortfolioStateService) {}

  setViewMode(mode: FinderViewMode): void {
    this.viewMode.set(mode);
  }

  setCategory(catId: string): void {
    this.selectedCategory.set(catId);
  }

  updateSearch(value: string): void {
    this.searchQuery.set(value);
  }

  clearSearch(): void {
    this.searchQuery.set('');
  }

  toggleMaximize(): void {
    this.isMaximized.update((v) => !v);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close();
  }

  close(): void {
    this.state.closeWindow();
  }

  select(project: Project): void {
    this.state.openProject(project);
  }
}
