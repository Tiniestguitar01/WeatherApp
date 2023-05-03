import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';
import { ContentComponent } from '../components/content/content.component';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  constructor(private http:HttpClient) { }

  Call(cityName: string)
  {
    let key = '859fe932e3a94708b4295807201010';
    let weatherURL = 'http://api.weatherapi.com/v1/forecast.json?key='+ key +'&q='+ cityName +'&days=2&aqi=no&alerts=no';
    let result = this.http.get(weatherURL);
    return  result;
  }
}
