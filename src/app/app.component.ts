import { Component } from '@angular/core';
import { QuoteServiceService } from './quote-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuoteServiceService]
})


export class AppComponent {
  title = 'app';
  constructor(private quoteServiceService: QuoteServiceService) {};
  quote = {};
  content = "";
  getQuote() {
    this.quoteServiceService.getQuote().subscribe(data => this.quote = this.getContent(data[0]));
  }

  getContent(data) {
    return this.removeQuotations(data["content"]);
  }

  removeQuotations(string) {
    return string;
  }

}
