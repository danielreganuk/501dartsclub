import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Meta, Title} from '@angular/platform-browser';
import emailjs from '@emailjs/browser';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  protected name = '';
  protected email = '';
  protected message = '';
  protected honeypot = '';

  protected readonly status = signal<FormStatus>('idle');
  protected readonly errorMessage = signal('');

  private lastSubmitTime = 0;
  private static readonly RATE_LIMIT_MS = 10_000;

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Contact Us | Exeter 501 Darts Club');
    this.meta.updateTag({
      name: 'description',
      content: 'Get in touch with Exeter 501 Darts Club. Questions about junior darts sessions, sponsorship, or anything else? We would love to hear from you.'
    });
  }

  protected get canSubmit(): boolean {
    return this.status() === 'idle' || this.status() === 'error';
  }

  protected async onSubmit(): Promise<void> {
    if (this.honeypot) return;
    if (!this.canSubmit) return;

    const now = Date.now();
    if (now - this.lastSubmitTime < Contact.RATE_LIMIT_MS) {
      this.errorMessage.set('Please wait a few seconds before trying again.');
      this.status.set('error');
      return;
    }

    this.status.set('sending');
    this.errorMessage.set('');
    this.lastSubmitTime = now;

    try {
      await emailjs.send(
        'default_service',
        'template_elr2k4r',
        { name: this.name, email: this.email, message: this.message },
        '0LsFwzlknXDo8JO0v'
      );
      this.status.set('success');
    } catch {
      this.errorMessage.set('Something went wrong. Please try again or email us directly.');
      this.status.set('error');
    }
  }
}
