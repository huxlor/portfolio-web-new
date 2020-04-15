import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntroHomeComponent } from './pages/intro-home/intro-home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MenuComponent } from './components/menu/menu.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { HttpClientModule } from '@angular/common/http';

// import { MatTabGroup } from '@angular/material/tabs';

//Routes


@NgModule({
  declarations: [
    AppComponent,
    IntroHomeComponent,
    AboutMeComponent,
    MenuComponent,
    PortfolioComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatTabsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
