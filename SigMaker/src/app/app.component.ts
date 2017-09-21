import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contentCreated = {
    firstName: 'First name',
    lastName: 'Last name',
    email: 'email@aut.ac.nz',
    position: 'Full position',
    phoneNumber: '09 921 1234',
    mobileNumber: '021 011 1234'
  };

  onContentCreate(firstName: HTMLInputElement, lastName: HTMLInputElement, email: HTMLInputElement, phoneNumber: HTMLInputElement, mobileNumber: HTMLInputElement, position: HTMLInputElement) {

    this.contentCreated.firstName = firstName.value;
    this.contentCreated.lastName = lastName.value;
    this.contentCreated.email = email.value;
    this.contentCreated.position = position.value;
    this.contentCreated.phoneNumber = phoneNumber.value;
    this.contentCreated.mobileNumber = mobileNumber.value;
  }
}
