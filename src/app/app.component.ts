import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from  '@angular/forms';

//Component
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})


//Export Class
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
