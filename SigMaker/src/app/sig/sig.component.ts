import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sig',
  templateUrl: './sig.component.html',
  styleUrls: ['./sig.component.css']
})

  @Input() sigCompContent: {
    firstName: string,
    lastName: string,
    email: string,
    position: string,
    phoneNumber: string,
    mobileNumber: string,
    showImages: boolean,
    showCode: boolean
  };

  constructor() {
  }

}
