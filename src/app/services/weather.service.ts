import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {
    http: any;
    apiKey: String;
    conditionUrl: String;
    searchUrl: String;

    constructor(http: Http){
        this.http = http;
        this.apiKey = '<your key>';
        this.conditionUrl = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';
        this.searchUrl = 'http://localhost:8100/search/aq?query=' // SEE ionic.config.json for proxy -> useful for security restriction
    }

    getWeather(zmw){
        return this.http.get(this.conditionUrl+'/zmw:'+zmw+'.json')
            .map( res => res.json());
    }

    searchCities(searchStr){
        return this.http.get(this.searchUrl+searchStr)
            .map( res => res.json());
    }
}