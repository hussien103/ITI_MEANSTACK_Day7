import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Series, SingleSeries} from '../models/ISeries';
@Injectable({
  providedIn: 'root'
})
export class TvService {
  
  apikey = '5a1a47d8e6e5e49ea51724d6c665c920';
  constructor(private http: HttpClient) {}

  getTvList(pageNumber: number = 1): Observable<Series> {
    return this.http.get<Series>(`https://api.themoviedb.org/3/tv/popular?api_key=${this.apikey}&page=${pageNumber}`);
  }
  getSeriesByID(seriesID: number): Observable<SingleSeries> {
    return this.http.get<SingleSeries>(`https://api.themoviedb.org/3/tv/${seriesID}?api_key=${this.apikey}`
    );
  }
}