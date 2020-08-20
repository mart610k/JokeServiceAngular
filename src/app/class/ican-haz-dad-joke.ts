import { AbstractJoke } from './abstract-joke';

export class ICanHazDadJoke extends AbstractJoke {
    joke : string;

    getJoke(): string {
        return this.joke;
    }

    constructor(jokeString){
        super();
        this.joke = jokeString;
    }
}
