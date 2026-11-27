import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideArrowRight,
  lucideMail,
  lucideBinary,
  lucideCopy,
  lucideCheck,
  lucideFileText,
  lucideSparkles,
  lucideMapPin,
  lucideGraduationCap,
} from '@ng-icons/lucide';
import { ionLogoGithub, ionLogoLinkedin } from '@ng-icons/ionicons';

import { PortfolioStateService } from '../../core/portfolio-state.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgIcon],
  providers: [
    provideIcons({
      lucideArrowRight,
      lucideMail,
      lucideBinary,
      lucideCopy,
      lucideCheck,
      lucideFileText,
      lucideSparkles,
      lucideMapPin,
      lucideGraduationCap,
      ionLogoGithub,
      ionLogoLinkedin,
    }),
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  readonly emailCopied = signal(false);

  constructor(readonly state: PortfolioStateService) {}

  scrollToWork(): void {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.state.setActiveSection('work');
  }

  downloadResume(): void {
    this.state.openWindow('resume');
  }

  showAvailability(): void {
    this.state.openWindow('availability');
  }

  openPhoto(): void {
    this.state.openWindow('preview');
  }

  copyEmail(): void {
    navigator.clipboard.writeText(this.state.profile.email);
    this.emailCopied.set(true);
    setTimeout(() => this.emailCopied.set(false), 2400);
  }
}
