import { Routes } from '@angular/router';
import { IntroHomeComponent } from './pages/intro-home/intro-home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';


export const ROUTES: Routes = [
  {path: 'home', component: IntroHomeComponent, data: { animation: 'isTop' }},
  {path: 'about-me', component: AboutMeComponent, data: { animation: '' }},
  {path: 'experience', component: PortfolioComponent, data: { animation: 'isBottom' }},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];