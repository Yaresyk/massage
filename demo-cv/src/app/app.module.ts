import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { FooterComponent } from './footer/footer.component';
import { SalonComponent } from './salon/salon.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { PriceComponent } from './price/price.component';

import { MassagesComponent } from './massages/massages.component';
import { AbouteUsComponent } from './aboute-us/aboute-us.component';
import { GalleryComponent } from './gallery/gallery.component';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeCardsComponent } from './home/home-cards/home-cards.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import { HomeCardsOneComponent } from './home/home-cards-one/home-cards-one.component';




//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    SalonComponent,
    ReviewsComponent,
    PriceComponent,
   
    MassagesComponent,
    AbouteUsComponent,
    GalleryComponent,
   
    HomeComponent,
    HomeCardsComponent,

    HomeCardsOneComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
	 MatButtonModule,
	 MatIconModule,
	 MatToolbarModule,
	 MatCardModule,
	 MatDividerModule,
	 MatSidenavModule,
	 MatTableModule,
	 MatPaginatorModule,
	 MatSortModule,
	 FlexLayoutModule,
	 RouterModule,
	 MatTabsModule,
	 MatMenuModule,
	
	 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
