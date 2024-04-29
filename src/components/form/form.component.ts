import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  form = {
    full_name: '',
    email: '',
    address: '',
    city: '',
    country: '',
    state: '',
    zipcode: '',
    billing_same: false,
    soda: 0
  };

  onSubmit() {
    // Manejar el envío del formulario
    console.log('Formulario enviado:', this.form);
  }
}
