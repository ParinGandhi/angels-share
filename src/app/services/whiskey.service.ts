import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Quote } from '../models/Quote.model';

@Injectable({
  providedIn: 'root',
})
export class WhiskeyService {
  constructor(private http: HttpClient) {}

  getQuotes(): Observable<Array<Quote>> {
    return this.http.get<Array<Quote>>(`../../assets/quotes/quotes.json`).pipe(
      map((quotes) => {
        return quotes;
      })
    );
  }
}
