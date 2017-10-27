import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {MessengerService} from "./messenger.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  content: {
    firstName: string,
    lastName: string,
    email: string,
    position: string,
    phoneNumber: string,
    mobileNumber: string
  };

  version:string = '';
  sigMakerUrl:string = '';

  constructor(httpClient: Http, private messengerService: MessengerService){
    httpClient.request('https://api.github.com/repos/KEDRI-AUT/KEDRI-email-signature/releases/latest')
      .subscribe(res => {this.version = res.json()['tag_name'], this.sigMakerUrl = res.json()['name']});
  }

  ngOnInit(){
    this.content = this.messengerService.content;
  }
}
