// edit-account.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class EditAccountComponent implements OnInit {
  editAccountForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private modalController: ModalController) {
    this.editAccountForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, this.southAfricanPhoneNumberValidator]],
      // Add other fields as needed
    });
  }

  ngOnInit() {
    const storedAccount = localStorage.getItem('accountDetails');
    if (storedAccount !== null) {
      this.editAccountForm.patchValue(JSON.parse(storedAccount));
    } else {
      // You can provide default values for the form here if needed
      this.editAccountForm.patchValue({
        name: 'Francois',
        email: 'pfpfrancois2001@gmail.com',
        phone: '0714222148',
      
      });
    }
  }
  
  onSubmit() {
    if (this.editAccountForm.valid) {
      localStorage.setItem('accountDetails', JSON.stringify(this.editAccountForm.value));
      this.closeModal();
    }
  }

  closeModal() {
    this.modalController.dismiss();
  }

  southAfricanPhoneNumberValidator(control: FormControl) {
    const phoneNumberRegex = /^((\+27|0)[1-9]{2}\s?[1-9]{1}[0-9]{2}\s?[0-9]{4})$/;
    return phoneNumberRegex.test(control.value) ? null : { invalidPhoneNumber: true };
  }
}
