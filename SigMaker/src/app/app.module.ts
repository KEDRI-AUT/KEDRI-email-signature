import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SigComponent } from './sig/sig.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {MessengerService} from "./messenger.service";
import { AppFormComponent } from './app-form/app-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SigComponent,
    AppFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MessengerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
