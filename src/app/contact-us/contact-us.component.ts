import { Component, OnInit, ViewChild } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  @ViewChild('form') form: any;

  constructor() { }

  ngOnInit(): void {
  }
  sendEmail() {
    const templateParams = {
      name: this.form.value.name,
      email: this.form.value.email,
      message: this.form.value.message
    };
    console.log(templateParams)
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
    .then((result) => {
      console.log(result.text);
      // Optionally, display a success message or perform any other action upon successful email sending
    }, (error) => {
      console.log(error.text);
      // Optionally, display an error message or perform any other action upon email sending failure
    });
  }
}
