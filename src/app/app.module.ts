import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YoMamaViewComponent } from './yo-mama-view/yo-mama-view.component';
import { AbstractJokeService } from './service/abstract-joke.service';
import { YoMamaJokeService } from "./service/yo-mama-joke.service";

@NgModule({
  declarations: [
    AppComponent,
    YoMamaViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: AbstractJokeService,
      useClass: YoMamaJokeService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
