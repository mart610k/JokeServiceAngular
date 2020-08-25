import { Injectable } from '@angular/core';
import { AbstractJokeService } from './abstract-joke.service';
import { AbstractJoke } from "../class/abstract-joke";
import { ICanHazDadJoke } from '../class/ican-haz-dad-joke';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class ICanHazDadJokeService extends AbstractJokeService {
  //https://icanhazdadjoke.com/api
  
  async getJoke(): Promise<AbstractJoke> {
    
    let dadjoke : AbstractJoke;

    let headerInfo = {headers :{"Accept":"Application/JSON"}}
    
    await this._http.get<ICanHazDadJoke>("https://icanhazdadjoke.com/", headerInfo
      )
      .toPromise()
      .then(result =>
      {
        dadjoke = new ICanHazDadJoke(result.joke);
      });
    return dadjoke;
  }

  constructor(private _http : HttpClient) {super() }
}
