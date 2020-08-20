import { Component, OnInit } from '@angular/core';

import { YoMamaJoke } from '../class/yo-mama-joke';
import { AbstractJoke } from '../class/abstract-joke';
import { AbstractJokeService } from '../service/abstract-joke.service';

@Component({
  selector: 'app-yo-mama-view',
  templateUrl: './yo-mama-view.component.html',
  styleUrls: ['./yo-mama-view.component.css']
})
export class YoMamaViewComponent implements OnInit {
  joke : AbstractJoke = new YoMamaJoke("Yo Mama is so slow she waits for the clock to go around again");
  constructor(private jokeservice : AbstractJokeService) {
    
    this.getNewJoke();
   }
  
  ngOnInit(): void {

   
  }
  async getNewJoke() {
    this.joke = await this.jokeservice.getJoke();
  }

  changeJokeService(){
    
  }

}
