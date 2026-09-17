import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMail, lucideSend, lucideCheck, lucideBinary, lucidePhone } from '@ng-icons/lucide';
import { ionLogoGithub, ionLogoLinkedin } from '@ng-icons/ionicons';

import { PROFILE } from '../../core/portfolio-state.service';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const EMPTY_FORM: ContactForm = { name: '', email: '', message: '' };

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgIcon, FormsModule],
  providers: [
    provideIcons({
      lucideMail,
      lucideSend,
      lucideCheck,
      lucideBinary,
      lucidePhone,
      ionLogoGithub,
      ionLogoLinkedin,
    }),
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly form = signal<ContactForm>({ ...EMPTY_FORM });
  readonly submitted = signal(false);
  readonly profile = PROFILE;
  readonly email = PROFILE.email;

  updateField<K extends keyof ContactForm>(key: K, value: string): void {
    this.form.update((current) => ({ ...current, [key]: value }));
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    const { name, email, message } = this.form();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    // No backend on a static portfolio: hand the pre-filled message off to
    // the visitor's own mail client rather than silently swallowing it.
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${this.email}?subject=${subject}&body=${body}`;

    this.submitted.set(true);
  }

  resetForm(): void {
    this.form.set({ ...EMPTY_FORM });
    this.submitted.set(false);
  }
}
