import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
 contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  onSubmit() {
    if (this.contactForm.valid) {
      const payload = this.contactForm.value;
      // Static site: fallback using mailto (no backend). You can replace with API call if available.
      const mailto = `mailto:hello@example.com?subject=${encodeURIComponent('Contact from ' + payload.name)}&body=${encodeURIComponent(payload.message + '\n\nEmail: ' + payload.email)}`;
      window.location.href = mailto;
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
