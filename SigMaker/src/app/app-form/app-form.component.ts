import {Component, ElementRef, Input} from '@angular/core';
import {MessengerService} from "../messenger.service";

@Component({
  selector: 'app-app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.css']
})

  messengerServiceObj: MessengerService = new MessengerService();



  }

  onContentCreate(firstName: string, lastName: string, email: string, phoneNumber: string, mobileNumber: string, position: string, showImages: boolean) {
    this.messageService.updateContent(firstName, lastName, email, phoneNumber, mobileNumber, position, showImages);
  }

  onClear(sigForm: HTMLFormElement){
    sigForm.reset();
  }

}
