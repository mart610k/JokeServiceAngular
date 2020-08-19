import { AbstractJoke } from "./abstract-joke";

export class YoMamaJoke extends AbstractJoke {
    joke : string;
    
    constructor(joke : string){
        super();
        this.joke = joke;
    }

    getJoke() : string {
        return this.joke;
    }
}
