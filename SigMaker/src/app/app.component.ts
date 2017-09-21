import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Output() contentCreated = new EventEmitter<{
    firstName: string,
    lastName: string,
    email: string,
    position: string,
    phoneNumber: string,
    mobileNumber: string
  }>();

  onContentCreate(firstName: HTMLInputElement, lastName: HTMLInputElement, email: HTMLInputElement, phoneNumber: HTMLInputElement, mobileNumber: HTMLInputElement, position: HTMLInputElement) {
    this.contentCreated.emit({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      phoneNumber: phoneNumber.value,
      mobileNumber: mobileNumber.value,
      position: position.value
    });
    console.log("onContentCreated called.")
  }
}
