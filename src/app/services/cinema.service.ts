import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  private apiURL = ''

  constructor(private http: HttpClient) {
    
   }

   getData()
   {

    let url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=434577a472bbcc4c3d3154c77dd71ace&language=en-US';
    
    return this.http.get(url);
   }
  
   getMovies()
   {
    let url = 'https://api.themoviedb.org/3/discover/movie?api_key=434577a472bbcc4c3d3154c77dd71ace&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18&with_watch_monetization_types=flatrate';
    return this.http.get(url);
   }

}
