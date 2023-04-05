import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/httpServices.service';

@Component({
  selector: 'app-movieshome',
  templateUrl: './movieshome.component.html',
  styleUrls: ['./movieshome.component.scss'],
})
export class MovieshomeComponent implements OnInit {
  trendingMovies: any;
  popularMovies: any;
  cinemaMovies: any;






  constructor(private httpService: HttpService, private router: Router) {}

  ngOnInit(): void {

    this.httpService.getTrendingMovies('http://localhost:4200/assets/data/trending-movies.json', {}).subscribe((movies) => {
      this.trendingMovies= movies;
      console.log(movies);
    });

    this.httpService.getPopularMovies("http://localhost:4200/assets/data/popular-movies.json", {}).subscribe((popularmovies)=> {
      this.popularMovies=popularmovies;
      console.log(popularmovies);
    });

    this.httpService.getCinemaMovies("http://localhost:4200/assets/data/cinema-movies.json", {}).subscribe((cinemamovies)=> {
      this.cinemaMovies=cinemamovies;
      console.log(cinemamovies);
    });
  }

  goToMovie(type:string, id:string){
    this.router.navigate(["movie", type, id]);
  }


}
