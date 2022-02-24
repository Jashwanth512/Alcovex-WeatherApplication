import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/loader/loader.service';
@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.css']
})
export class WeatherWidgetMainComponent implements OnInit {
  WeatherData:any
  constructor(public loaderService:LoaderService) 
  {}

  ngOnInit(): void {
    this.WeatherData=
    {
      main:{}
    };
    this.getUserLocation()
  }  
  getUserLocation()
  {
    if (navigator.geolocation)
    {
      let res=navigator.geolocation.getCurrentPosition((e)=>
      {
        this.getWeatherData(e);
      }
      );
    }else
    {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  

  async getWeatherData(position)
  {
    var response_from_api=await fetch("https://api.openweathermap.org/data/2.5/weather?lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&appid=d28274b5fe592e1f1e558103a5e66370&units=metric")
    var js_obj=await response_from_api.json();
    this.setWeatherData(js_obj)
  }
  
  setWeatherData(data:object)
  {
    this.WeatherData=data;
    this.WeatherData.temp=this.WeatherData.main.temp;
    this.WeatherData.city=this.WeatherData.name;
  }
}