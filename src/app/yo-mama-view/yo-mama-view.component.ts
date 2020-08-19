import { Component, OnInit } from '@angular/core';
import { MockJokeService } from "../service/yo-mama-joke.service";
import { YoMamaJoke } from '../yo-mama-joke';

@Component({
  selector: 'app-yo-mama-view',
  templateUrl: './yo-mama-view.component.html',
  styleUrls: ['./yo-mama-view.component.css']
})
export class YoMamaViewComponent implements OnInit {

  constructor(private jokeservice : MockJokeService  ) {

    this.data();
   }
  joke : YoMamaJoke;
  ngOnInit(): void {

    this.data();
  }
  async data() {
    this.joke = await this.jokeservice.getJoke();
  }

}
