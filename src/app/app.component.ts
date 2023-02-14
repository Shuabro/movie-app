import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CinemaService } from './services/cinema.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'movie-app';

  data: any = [];
  newData : string[] = [];
  constructor(private cinema: CinemaService)
  {
    this.cinema.getData().subscribe(movies=>{
      
      console.log(movies);
      this.data = movies;
      this.display(this.data);
    })

   
  }

  display(data: any)
  {
    for(let i = 0; i < this.data.genres.length; i++)
    {
      this.newData[i] = this.data.genres[i].name;
    }
    
  }

  onClick()
  {
    this.cinema.getMovies().subscribe(movies => {console.log(movies);})
  }
  
}
