import { DatePipe } from '@angular/common';
import {
  Component,
  DestroyRef,
  HostListener,
  inject,
  signal,
} from '@angular/core';

interface MenuItem {
  label: string;
  shortcut?: string;
  separator?: boolean;
  disabled?: boolean;
  action?: () => void;
}

interface Menu {
  label: string;
  items: MenuItem[];
}

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  templateUrl: './menu-bar.html',
  styleUrl: './menu-bar.scss',
  imports: [DatePipe]
})
export class MenuBarComponent {
  private readonly destroyRef = inject(DestroyRef);

  readonly activeMenu = signal<string | null>(null);
  readonly currentTime = signal(new Date());

  readonly menus: Menu[] = [
    {
      label: 'Finder',
      items: [
        {
          label: 'About This Portfolio',
          action: () => this.scrollTo('about'),
        },
        {
          separator: true,
          label: '',
        },
        {
          label: 'Preferences…',
          disabled: true,
        },
        {
          separator: true,
          label: '',
        },
        {
          label: 'Hide Finder',
          shortcut: '⌘H',
          disabled: true,
        },
        {
          label: 'Hide Others',
          shortcut: '⌥⌘H',
          disabled: true,
        },
      ],
    },

    {
      label: 'File',
      items: [
        {
          label: 'New Project Inquiry',
          shortcut: '⌘N',
          action: () => this.scrollTo('contact'),
        },
        {
          label: 'Open Resume',
          shortcut: '⌘O',
          action: () => this.openResume(),
        },
        {
          separator: true,
          label: '',
        },
        {
          label: 'Download Resume',
          shortcut: '⌘S',
          action: () => this.downloadResume(),
        },
        {
          separator: true,
          label: '',
        },
        {
          label: 'Close Window',
          shortcut: '⌘W',
          action: () => this.closeWindow(),
        },
      ],
    },

    {
      label: 'Edit',
      items: [
        {
          label: 'Undo',
          shortcut: '⌘Z',
          disabled: true,
        },
        {
          label: 'Redo',
          shortcut: '⇧⌘Z',
          disabled: true,
        },
        {
          separator: true,
          label: '',
        },
        {
          label: 'Copy Email',
          shortcut: '⌘C',
          action: () => this.copyEmail(),
        },
      ],
    },

    {
      label: 'View',
      items: [
        {
          label: 'Home',
          action: () => this.scrollTo('home'),
        },
        {
          label: 'About',
          action: () => this.scrollTo('about'),
        },
        {
          label: 'Work',
          action: () => this.scrollTo('work'),
        },
        {
          label: 'Skills',
          action: () => this.scrollTo('skills'),
        },
        {
          label: 'Experience',
          action: () => this.scrollTo('experience'),
        },
        {
          label: 'Contact',
          action: () => this.scrollTo('contact'),
        },
      ],
    },

    {
      label: 'Go',
      items: [
        {
          label: 'Home',
          shortcut: '⌘1',
          action: () => this.scrollTo('home'),
        },
        {
          label: 'About',
          shortcut: '⌘2',
          action: () => this.scrollTo('about'),
        },
        {
          label: 'Work',
          shortcut: '⌘3',
          action: () => this.scrollTo('work'),
        },
        {
          label: 'Skills',
          shortcut: '⌘4',
          action: () => this.scrollTo('skills'),
        },
        {
          label: 'Experience',
          shortcut: '⌘5',
          action: () => this.scrollTo('experience'),
        },
        {
          label: 'Contact',
          shortcut: '⌘6',
          action: () => this.scrollTo('contact'),
        },
        {
          separator: true,
          label: '',
        },
        {
          label: 'Availability',
          action: () => this.openAvailability(),
        },
      ],
    },

    {
      label: 'Window',
      items: [
        {
          label: 'Projects',
          action: () => this.openWindow('finder'),
        },
        {
          label: 'Resume',
          action: () => this.openWindow('resume'),
        },
        {
          label: 'Availability',
          action: () => this.openWindow('availability'),
        },
        {
          separator: true,
          label: '',
        },
        {
          label: 'Close Window',
          shortcut: '⌘W',
          action: () => this.closeWindow(),
        },
      ],
    },

    {
      label: 'Help',
      items: [
        {
          label: 'Portfolio Help',
          action: () => console.log('Portfolio help'),
        },
        {
          label: 'Keyboard Shortcuts',
          action: () => console.log('Keyboard shortcuts'),
        },
        {
          separator: true,
          label: '',
        },
        {
          label: 'About This Website',
          action: () => console.log('About this website'),
        },
      ],
    },
  ];

  constructor() {
    const timer = window.setInterval(() => {
      this.currentTime.set(new Date());
    }, 1000);

    this.destroyRef.onDestroy(() => {
      clearInterval(timer);
    });
  }

  toggleMenu(event: MouseEvent, menu: string): void {
    event.stopPropagation();

    this.activeMenu.update((current) =>
      current === menu ? null : menu
    );
  }

  execute(event: MouseEvent, item: MenuItem): void {
    event.stopPropagation();

    if (item.disabled || item.separator) {
      return;
    }

    item.action?.();
    this.activeMenu.set(null);
  }

  @HostListener('document:click')
  closeMenus(): void {
    this.activeMenu.set(null);
  }

  @HostListener('document:keydown.escape')
  closeEscape(): void {
    this.activeMenu.set(null);
  }

  private scrollTo(id: string): void {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
  }

  private openResume(): void {
    console.log('Open resume');
  }

  private openAvailability(): void {
    console.log('Open availability');
  }

  private openWindow(window: string): void {
    console.log('Open window:', window);
  }

  private closeWindow(): void {
    console.log('Close window');
  }

  private copyEmail(): void {
    navigator.clipboard?.writeText('your@email.com');
  }

  private downloadResume(): void {
    const anchor = document.createElement('a');

    anchor.href = '/resume.pdf';
    anchor.download = 'Gadisa-Amenu-Resume.pdf';

    anchor.click();
  }
}