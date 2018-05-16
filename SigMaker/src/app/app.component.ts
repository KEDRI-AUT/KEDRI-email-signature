import {Component, OnInit} from '@angular/core';
import {MessengerService} from "./messenger.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  appCompContent: {
    firstName: string,
    lastName: string,
    email: string,
    position: string,
    phoneNumber: string,
    mobileNumber: string
  };

  version: string = '';
  sigMakerUrl: string = '';

  constructor(private httpClient: HttpClient, private messengerService: MessengerService) {
  }

  ngOnInit() {
    this.appCompContent = this.messengerService.defaultContent;
    this.httpClient.get('https://api.github.com/repos/KEDRI-AUT/KEDRI-email-signature/releases/latest').subscribe(
      data => {
        this.version = data['tag_name'];
        this.sigMakerUrl = data['name'];
      }
    )
  }
}
