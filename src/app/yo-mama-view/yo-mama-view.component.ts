import { Component, OnInit } from '@angular/core';
import { MockJokeService } from "../service/yo-mama-joke.service";
import { YoMamaJoke } from '../class/yo-mama-joke';

@Component({
  selector: 'app-yo-mama-view',
  templateUrl: './yo-mama-view.component.html',
  styleUrls: ['./yo-mama-view.component.css']
})
export class YoMamaViewComponent implements OnInit {
  joke : YoMamaJoke = new YoMamaJoke("Yo Mama is so slow she waits for the clock to go around again");
  constructor(private jokeservice : MockJokeService  ) {

    this.data();
   }
  
  ngOnInit(): void {

   
  }
  async data() {
    this.joke = await this.jokeservice.getJoke();
  }

}
