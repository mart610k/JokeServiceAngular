import { Injectable } from '@angular/core';

import { YoMamaJokeService } from './yo-mama-joke.service';
import { ICanHazDadJokeService } from './ican-haz-dad-joke.service';
import { AbstractJokeService } from './abstract-joke.service';
import { CurrentJokeEnum } from "../enum/current-joke.enum";


@Injectable({
    providedIn: 'root'
  })
export class JokeService {
    // Basic idea of this service was obtained from StackOverflow. Allows for dynamic changes between backend joke services.
    // https://stackoverflow.com/questions/42698697/how-to-dynamically-change-angular-service-implementation
    _jokeService : CurrentJokeEnum = CurrentJokeEnum.YoMamaJoke 

    constructor(private yoMamaJoke : YoMamaJokeService, private ICanHazDadJoke : ICanHazDadJokeService){
    }

    public get instance(): AbstractJokeService{
        
        switch(this._jokeService)
        {
            case CurrentJokeEnum.YoMamaJoke:
                return this.yoMamaJoke;
            case CurrentJokeEnum.ICanHazJoke:
                return this.ICanHazDadJoke;
        }
    }

    public ChangeJokeService(jokeEnum : CurrentJokeEnum){
        console.log(jokeEnum.toString());
        this._jokeService = jokeEnum;
    }

}

