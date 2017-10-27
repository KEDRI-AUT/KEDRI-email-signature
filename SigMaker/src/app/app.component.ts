import {Component} from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  version:string = '';
  sigMakerUrl:string = '';

  constructor(httpClient: Http){
    httpClient.request('https://api.github.com/repos/KEDRI-AUT/KEDRI-email-signature/releases/latest')
      .subscribe(res => {this.version = res.json()['tag_name'], this.sigMakerUrl = res.json()['name']});
  }

  }
}
