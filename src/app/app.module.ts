import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokeViewComponent } from './joke-view/joke-view.component';
import { JokeService } from './service/joke-service';

@NgModule({
  declarations: [
    AppComponent,
    JokeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ JokeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
