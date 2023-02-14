import { AppComponent } from 'src/app/app.component';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

 
  constructor(private http: HttpClient){}

  ngOnInit(){
    //API Call
   

    this.http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=434577a472bbcc4c3d3154c77dd71ace&language=en-US').subscribe(data => {console.log(data); });

    
  }

 
}
