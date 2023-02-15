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
  sdDe : string[] = [];
  sdDeID : string[] = [];
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

  searchMovies(e: any)
  {
   
    var query: string = e.target.value;

    this.cinema.getQuery(query).subscribe(movies => {console.log(movies)
    this.displayQuery(movies);})

    
    
  }

  displayQuery(movies:any){
   
    for(let i = 0; i < 10; i++)
    {
      this.sdDe[i] = movies.results[i].title;
      console.log(this.sdDe[i])
    }

    for(let i = 0; i < 10; i++)
    {
      this.sdDeID[i] = movies.results[i].id;
      console.log(this.sdDeID[i])
    }

    

  }
  
}
