import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider } from './animation';

@Component({
  selector: 'app-root',
  animations: [
    slider
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'sebasdcdev';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
