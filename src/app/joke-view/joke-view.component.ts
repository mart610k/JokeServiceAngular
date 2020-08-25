import { Component, OnInit } from '@angular/core';

import { YoMamaJoke } from '../class/yo-mama-joke';
import { AbstractJoke } from '../class/abstract-joke';
import { JokeService } from "../service/joke-service";
import { CurrentJokeEnum } from '../enum/current-joke.enum';


@Component({
  selector: 'app-joke-view',
  templateUrl: './joke-view.component.html',
  styleUrls: ['./joke-view.component.css']
})
export class JokeViewComponent implements OnInit {
  joke : AbstractJoke = new YoMamaJoke("Yo Mama is so slow she waits for the clock to go around again");

  constructor(private jokeservice : JokeService) {
    
    this.getNewJoke();
   }


  // getCurrentJokeService() : string{
  //   return []
  // }
  
  ngOnInit(): void {

   
  }
  async getNewJoke() {
    this.joke = await this.jokeservice.instance.getJoke();
  }

  changeJokeService(){
    if(this.jokeservice._jokeService === CurrentJokeEnum.ICanHazJoke){
      this.jokeservice.ChangeJokeService(CurrentJokeEnum.YoMamaJoke);
    }
    else{
      this.jokeservice.ChangeJokeService(CurrentJokeEnum.ICanHazJoke);
    }
  }

}
