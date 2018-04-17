import { Injectable } from '@angular/core';

@Injectable()
export class MessengerService {

  content = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@aut.ac.nz',
    position: 'Researcher',
    phoneNumber: '09 921 1234',
    mobileNumber: '021 011 1234',
    showImages: null,
    showCode: null
  };

  constructor() { }

  updateContent(firstName: string, lastName: string, email: string, phoneNumber: string, mobileNumber: string, position: string, showImages: boolean, showCode: boolean){
    this.content.firstName = firstName;
    this.content.lastName = lastName;
    this.content.email = email;
    this.content.position = position;
    this.content.phoneNumber = phoneNumber;
    this.content.mobileNumber = mobileNumber;
    this.content.showImages = showImages;
    this.content.showCode = showCode;
  }

}
