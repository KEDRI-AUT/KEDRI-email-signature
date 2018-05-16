import { Injectable } from '@angular/core';

@Injectable()
export class MessengerService {

  defaultContent = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@aut.ac.nz',
    position: 'Researcher',
    phoneNumber: '09 921 1234',
    mobileNumber: '021 011 1234',
    showImages: null,
  };

  constructor() { }

  updateContent(firstName: string, lastName: string, email: string, phoneNumber: string, mobileNumber: string, position: string, showImages: boolean){
    this.defaultContent.firstName = firstName;
    this.defaultContent.lastName = lastName;
    this.defaultContent.email = email;
    this.defaultContent.position = position;
    this.defaultContent.phoneNumber = phoneNumber;
    this.defaultContent.mobileNumber = mobileNumber;
    this.defaultContent.showImages = showImages;
  }

}
