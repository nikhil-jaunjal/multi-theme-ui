import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme-service.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.defaultTheme();
  }

  defaultTheme() {
    this.themeService.setDefaultTheme();
  }

  theme1() {
    this.themeService.setLightTheme();
  }

  theme2() {
    this.themeService.setDarkTheme();
  }

}
