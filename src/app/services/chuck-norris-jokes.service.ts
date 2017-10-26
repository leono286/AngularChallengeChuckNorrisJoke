import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ChuckNorrisJokesService {

  constructor( private http:Http ){}

  getNewJoke(){
    return this.http.get('https://api.chucknorris.io/jokes/random').map( response => response.json().value );
  }

}
