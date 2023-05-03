import { Component, OnInit } from '@angular/core';
import {WeatherService} from 'src/app/api/weather.service';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { faTemperatureHalf } from '@fortawesome/free-solid-svg-icons';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faDroplet} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit{
    weatherData:any;
  
    faTemperatureHalf = faTemperatureHalf;
    faWind = faWind;
    faPaperPlane = faPaperPlane;
    faDroplet = faDroplet;

    constructor(  private weather:WeatherService) {}
    public city = "Budapest";

    onSubmit(form: NgForm) : void {
      if(form.value['city'] != "")
      {
        this.city = form.value['city'];
      }
      form.reset();
      this.ngOnInit();
    }

    ngOnInit()
    {
      this.weather.Call(this.city).subscribe((data) =>
      {
        this.weatherData = data;
      });
    }
}
