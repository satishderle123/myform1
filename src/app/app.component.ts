//https://appdividend.com/2019/06/04/angular-8-tutorial-with-example-learn-angular-8-crud-from-scratch/

import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from  '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder) 
  {
    this.createContactForm();
  }

  createContactForm(){
    this.contactForm = this.formBuilder.group({
      fullName: [''],  
      address: [''],
      email: [''],
      message: ['']
    });
  }
  onSubmit() 
  {
    console.log('Your form data : ', this.contactForm.value );
  }
}
