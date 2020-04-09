import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from '../../about-me.component';
import { MatTabGroup } from '@angular/material/tabs';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
  declarations: [AboutMeComponent],
  exports: [
    MatTabGroup,
    MatTabsModule
  ]
})
export class AboutMeModule { }
