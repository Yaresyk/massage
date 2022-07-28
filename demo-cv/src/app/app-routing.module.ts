import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AbouteUsComponent } from './aboute-us/aboute-us.component';
import { MassagesComponent } from './massages/massages.component';
import { PriceComponent } from './price/price.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SalonComponent } from './salon/salon.component';

import { HomeComponent } from './home/home.component';


const routes: Routes = [
	{
		path: 'massages',
		component: MassagesComponent,
	
	 },
	 {
		path: '',
		component: HomeComponent,
	},
	 {
		path: 'price',
		component: PriceComponent,
	 },
	 {
		path: 'salon',
		component: SalonComponent,
	 },
	 {
		path: 'aboute-us',
		component: AbouteUsComponent,
	 },
	 {
		path: 'reviews',
		component: ReviewsComponent,
	 },
	 {
		path: 'toolbar',
		component: ToolbarComponent,
	 },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule  { }


