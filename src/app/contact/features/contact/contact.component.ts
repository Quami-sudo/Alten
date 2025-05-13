import { Component, inject, OnInit } from '@angular/core';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { SeverityEnum } from 'app/shared';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [InputMaskModule, InputTextareaModule, ToastModule, ButtonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  public getSeverityEnum = SeverityEnum;
  public contactForm!: FormGroup;

  private readonly formBuilder = inject(FormBuilder);
  private readonly messageService = inject(MessageService);


  ngOnInit(): void {
      this.contactForm = this.formBuilder.group({
        email: ['', Validators.required],
        message: ['', [Validators.required, this.maxLength(300)]]
      });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.messageService.add({ severity: SeverityEnum.SUCCESS, summary: 'Succès', detail: 'Demande de contact envoyée avec succès' });
    }else{
      this.messageService.add({ severity: SeverityEnum.ERROR, summary: 'Erreur', detail: 'Une erreur est survenue lors de l\'envoie du message ! ' });
    }
  }

  private maxLength(maxWords: number){
    return (control: any) => {
      const words = control.value?.trim().split(/\s+/) || [];
      return words.length <= maxWords ? null : { maxWords: true };
    };
  }
}
