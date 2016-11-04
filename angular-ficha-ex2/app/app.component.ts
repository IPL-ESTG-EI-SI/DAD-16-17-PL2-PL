import { Component } from '@angular/core';

import { ImdbService } from './imdb.service';

import { Movie } from './movie'

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {

    searchText:string

    movies:Movie[]

    constructor(private imdbService: ImdbService){}

    searchBtnClick(){
        this.imdbService.search(this.searchText)
            .subscribe(
                (movies) => this.movies = movies
            );
    }

}
