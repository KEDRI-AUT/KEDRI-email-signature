import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sig',
  templateUrl: './sig.component.html',
  styleUrls: ['./sig.component.css']
})
export class SigComponent implements OnInit {

  @Input() content: {
    firstName: string,
    lastName: string,
    email: string,
    position: string,
    phoneNumber: string,
    mobileNumber: string,
    showImages: boolean
  };

  constructor() {
  }

  ngOnInit() {
  }

}
