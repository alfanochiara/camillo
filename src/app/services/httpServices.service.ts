import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

     getTrendingMovies(url:string, body:{}){
    return this.http.get(url, body)
  }

  getPopularMovies(url:string, body:{}){
    return this.http.get(url, body)
  }

  getCinemaMovies(url:string, body:{}){
    return this.http.get(url, body)
  }
}
