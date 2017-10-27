import { Component, OnInit } from '@angular/core';
import {MessengerService} from "../messenger.service";

@Component({
  selector: 'app-app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.css']
})
export class AppFormComponent implements OnInit {

  constructor(private messageService: MessengerService) { }

  ngOnInit() {
  }

  onContentCreate(firstName: HTMLInputElement, lastName: HTMLInputElement, email: HTMLInputElement, phoneNumber: HTMLInputElement, mobileNumber: HTMLInputElement, position: HTMLInputElement) {

    this.contentCreated.firstName = firstName.value;
    this.contentCreated.lastName = lastName.value;
    this.contentCreated.email = email.value;
    this.contentCreated.position = position.value;
    this.contentCreated.phoneNumber = phoneNumber.value;
    this.contentCreated.mobileNumber = mobileNumber.value;
  }

}
