import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../../core/services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  sending = false;
  sent = false;

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  constructor(private fb: FormBuilder, private contactService: ContactService) {}

  submit() {
    if (this.form.invalid) return;
    this.sending = true;
    this.contactService.submitContactForm(this.form.value as any).subscribe(() => {
      this.sending = false;
      this.sent = true;
      this.form.reset();
    });
  }
}
