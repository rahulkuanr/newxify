import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewApiServicesService {
  constructor(private _http: HttpClient) {}

  //topHeadingUrl
  newsApiUrl =
    'https://newsapi.org/v2/top-headlines?country=in&apiKey=5a521b0ef8754636a2494a89cb7d488f';

  //techNewsUrl
  techNewsApiUrl =
    'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=5a521b0ef8754636a2494a89cb7d488f';

  //businessNewsUrl
  businessNewsApiUrl =
    'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5a521b0ef8754636a2494a89cb7d488f';

  //topHeading
  topHeading(): Observable<any> {
    return this._http.get(this.newsApiUrl);
  }

  //techNews
  techNews(): Observable<any> {
    return this._http.get(this.techNewsApiUrl);
  }

  //businessNews
  businessNews(): Observable<any> {
    return this._http.get(this.businessNewsApiUrl);
  }
}
