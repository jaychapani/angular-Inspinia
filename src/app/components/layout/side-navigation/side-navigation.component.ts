import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import 'jquery-slimscroll';

declare var jQuery: any;

import { Weather } from '../../../models/weather';
import { WeatherService } from '../../../services/weather.service';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})
export class SideNavigationComponent implements OnInit, AfterViewInit {

  geolocationPosition: any;
  weather: Weather[] = [];

  constructor(private router: Router, private weatherService: WeatherService) { }

  ngOnInit() {
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          this.geolocationPosition = position;
          console.log(position);
        },
        error => {
          switch (error.code) {
            case 1:
              console.log('Permission Denied');
              break;
            case 2:
              console.log('Position Unavailable');
              break;
            case 3:
              console.log('Timeout');
              break;
          }
        }
      );
    }

    this.weatherService.getCurrentWeather().pipe(first()).subscribe(weather => {
      this.weather = weather;
    });
  }

  ngAfterViewInit() {
    jQuery('#side-menu').metisMenu();

    if (jQuery('body').hasClass('fixed-sidebar')) {
      jQuery('.sidebar-collapse').slimscroll({
        height: '100%'
      });
    }
  }
  activeRoute(routename: string): boolean {
    return this.router.url.indexOf(routename) > -1;
  }

}
