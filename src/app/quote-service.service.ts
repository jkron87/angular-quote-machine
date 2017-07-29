import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuoteServiceService {
  constructor (
    private http: Http
  ) {}

  getQuote() {
    return this.http.get(`http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=2`)
    .map((res:Response) => res.json());
  }

}

