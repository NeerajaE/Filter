import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'filter by region';
  searchText = '  ';
  countries= [
    'India',
    'Australia',
    'Algeria',
    'Bangladesh',
    'Belgiun',
    'Bhutan',
    'Canada',
    'China',
    'France',
    'Italy',
    'Japan',
    'Nepal',
    'Russia',
    'United kingdom',
     'Denmark',
     'Egypt',
     'Germany',
     'Iceland',
     'Hungary',
     'Mexico',
     'Singapore'



  ]
}