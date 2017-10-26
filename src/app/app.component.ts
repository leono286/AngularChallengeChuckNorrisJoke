import { Component, OnInit } from '@angular/core';
import { ChuckNorrisJokesService } from "./services/chuck-norris-jokes.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  seconds = 6;
  counter = 0;
  joke: any;

  constructor( private chuckNorrisService:ChuckNorrisJokesService ){ }

  ngOnInit() {
    this.timer();
    this.getNewJoke();
    setInterval( () => { 
      this.getNewJoke();
     }, 6000 );
  }

  getNewJoke() {
    if( this.seconds != 0 ){
      this.seconds = 0;
    }
    this.chuckNorrisService.getNewJoke().subscribe( response => {
      this.joke = response;
      console.log(this.joke);
      
    });
  }

  timer(){
    setInterval( () => { 
      this.counter += 1;
      if( this.counter % 10 == 0 && this.counter != 0) {
        if ( this.seconds == 0 ) {
          this.seconds = 6;
        }
        this.seconds -= 1;
      }
    }, 100 );
  }
  
}
