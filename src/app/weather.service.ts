import {Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class WeatherDataService {
    constructor(private http: Http) {}
    private countryUrl = 'http://localhost:51549/api/Weather/GetCities?country=';

    getcity(country: any) {
        return this.http.get(this.countryUrl+country)
        .map(this.extractData)
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }
    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
                   error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
      return Observable.throw(errMsg);
    }
}