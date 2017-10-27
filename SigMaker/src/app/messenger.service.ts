import { Injectable } from '@angular/core';

@Injectable()
export class MessengerService {

  content = {
    firstName: 'First name',
    lastName: 'Last name',
    email: 'email@aut.ac.nz',
    position: 'Full position',
    phoneNumber: '09 921 1234',
    mobileNumber: '021 011 1234'
  };

  constructor() { }

  updateContent(){

  }

}
