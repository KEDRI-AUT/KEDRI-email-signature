import {Component, OnInit} from '@angular/core';
import {MessengerService} from "../messenger.service";

@Component({
  selector: 'app-app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.css']
})
export class AppFormComponent implements OnInit {

  constructor(private messageService: MessengerService) {
  }

  ngOnInit() {
  }

  onContentCreate(firstName: string, lastName: string, email: string, phoneNumber: string, mobileNumber: string, position: string) {
    this.messageService.updateContent(firstName, lastName, email, phoneNumber, mobileNumber, position);
  }

}
