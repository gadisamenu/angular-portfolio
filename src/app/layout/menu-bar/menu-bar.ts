import { Component, ElementRef, HostListener, OnDestroy, OnInit, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideWifi, lucideSearch, lucideBatteryFull, lucideCheck } from '@ng-icons/lucide';

import { ThemeService } from '../../core/theme.service';
import { PROFILE, PortfolioStateService } from '../../core/portfolio-state.service';

type MenuId = 'apple' | 'finder' | 'file' | 'edit' | 'view' | 'go' | 'window' | 'help';

interface MenuConfig {
  id: MenuId;
  label: string;
}

const MENUS: MenuConfig[] = [
  { id: 'finder', label: 'Finder' },
  { id: 'file', label: 'File' },
  { id: 'edit', label: 'Edit' },
  { id: 'view', label: 'View' },
  { id: 'go', label: 'Go' },
  { id: 'window', label: 'Window' },
  { id: 'help', label: 'Help' },
];

const CONTACT_EMAIL = PROFILE.email;

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [NgIcon],
  providers: [provideIcons({ lucideWifi, lucideSearch, lucideBatteryFull, lucideCheck })],
  templateUrl: './menu-bar.html',
  styleUrl: './menu-bar.scss',
})
export class MenuBar implements OnInit, OnDestroy {
  readonly menus = MENUS;
  readonly sections = SECTIONS;
  readonly now = signal(new Date());
  readonly activeMenu = signal<MenuId | null>(null);
  readonly emailCopied = signal(false);
  readonly email = CONTACT_EMAIL;

  private timer?: ReturnType<typeof setInterval>;
  private copyTimer?: ReturnType<typeof setTimeout>;

  constructor(
    private readonly host: ElementRef<HTMLElement>,
    readonly theme: ThemeService,
    readonly state: PortfolioStateService,
  ) {}

  ngOnInit(): void {
    this.timer = setInterval(() => this.now.set(new Date()), 1000 * 30);
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
    if (this.copyTimer) clearTimeout(this.copyTimer);
  }

  get formattedDate(): string {
    return this.now().toLocaleDateString(undefined, {
      weekday: 'short',
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  toggleMenu(id: MenuId): void {
    this.activeMenu.set(this.activeMenu() === id ? null : id);
  }

  closeMenu(): void {
    this.activeMenu.set(null);
  }

  // Close any open dropdown when clicking outside the menu bar.
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.host.nativeElement.contains(event.target as Node)) {
      this.closeMenu();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }

  goToSection(id: string): void {
    this.state.setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.closeMenu();
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.closeMenu();
  }

  scrollToBottom(): void {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    this.closeMenu();
  }

  openAbout(): void {
    this.goToSection('about');
  }

  openResume(): void {
    this.state.openWindow('resume');
    this.closeMenu();
  }

  openFinder(): void {
    this.state.openWindow('finder');
    this.closeMenu();
  }

  openAvailability(): void {
    this.state.openWindow('availability');
    this.closeMenu();
  }

  setTheme(mode: 'light' | 'dark'): void {
    this.theme.setTheme(mode);
    this.closeMenu();
  }

  async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
    } catch {
      /* clipboard API unavailable — dropdown still shows the address to copy manually */
    }
    this.emailCopied.set(true);
    if (this.copyTimer) clearTimeout(this.copyTimer);
    this.copyTimer = setTimeout(() => {
      this.emailCopied.set(false);
      this.closeMenu();
    }, 1200);
  }
}
