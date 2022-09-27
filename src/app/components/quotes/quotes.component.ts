import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Quote } from 'src/app/models/Quote.model';
import { WhiskeyService } from 'src/app/services/whiskey.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
})
export class QuotesComponent implements OnInit {
  quotes: Array<Quote> = new Array<Quote>();

  constructor(private whiskeyService: WhiskeyService) {}

  ngOnInit(): void {
    this.getQuotes();
  }

  getQuotes() {
    this.whiskeyService
      .getQuotes()
      .pipe(take(1))
      .subscribe((quotes) => {
        this.quotes = quotes;
      });
  }
}
