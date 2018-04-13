import {Component, OnInit} from '@angular/core';
import {MessengerService} from "../messenger.service";

@Component({
  selector: 'app-app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.css']
})
export class AppFormComponent implements OnInit {

  initialContent: object;

  constructor(private messageService: MessengerService) {
    this.initialContent = this.messageService.content
  }

  ngOnInit() {
  }

  onContentCreate(firstName: string, lastName: string, email: string, phoneNumber: string, mobileNumber: string, position: string, showImages: boolean) {
    this.messageService.updateContent(firstName, lastName, email, phoneNumber, mobileNumber, position, showImages);
  }

}
