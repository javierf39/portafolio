import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portafolio';

  ngOnInit(){
    AOS.init({
      offset: 250,
      delay:200,
      duration:1500
    });
  }
  
}

