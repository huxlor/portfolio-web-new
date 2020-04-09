import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro-home',
  templateUrl: './intro-home.component.html',
  styleUrls: ['./intro-home.component.scss']
})
export class IntroHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo() {
    this.router.navigate(["/about-me"]);
  }

}
