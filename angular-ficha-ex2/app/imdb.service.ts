import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Movie } from './movie';

@Injectable()
export class ImdbService{

    private serviceUrl = 'http://www.omdbapi.com/?s=';

    constructor(private http:Http){}

    search(searchText:string):Observable<Movie[]>{
        return this.http.get(this.serviceUrl+searchText)
                .map(this.handleResponse);
    }

    private handleResponse(response:Response){
        let data = response.json();
        let movies:Movie[] = [];

        data.Search.forEach(function(searchItem:any){
            let movie = new Movie();
            movie.title = searchItem.Title;
            movie.year = searchItem.Year;
            movie.type = searchItem.Type;
            movie.poster = searchItem.Poster;
            movie.imdbID = searchItem.imdbID;
            movies.push(movie);
        })
        return movies;
    }

}

