import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient:HttpClient) { }
  GetWeatherData():Observable<any>{
      return this.httpClient.get('https://www.jsonblob.com/api/jasonlob/1215648183090012160');


}
}
