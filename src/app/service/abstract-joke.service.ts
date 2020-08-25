import { Injectable } from '@angular/core';

import { AbstractJoke } from "../class/abstract-joke"; 

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractJokeService {

  constructor() { }

  abstract async getJoke() : Promise<AbstractJoke>

}
