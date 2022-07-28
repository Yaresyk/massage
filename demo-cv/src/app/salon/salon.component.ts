import { Component, OnInit } from '@angular/core';

interface Item {
	imageSrc: string;
	imageAlt: string;
} 

@Component({
  selector: 'app-salon',
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.css']
})
export class SalonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data: Item[] = [
	{
		imageSrc: "/assets/salon/1.JPG",
		imageAlt: '1'
	 },
	 {
		imageSrc: "/assets/salon/2.JPG",
		imageAlt: '2'
	 },
	 {
		imageSrc: "/assets/salon/3.JPG",
		imageAlt: '3'
	 },
	 {
		imageSrc: "/assets/salon/4.JPG",
		imageAlt: '4'
	 },
	
	 {
		imageSrc: "/assets/salon/6.JPG",
		imageAlt: '6'
	 },
	 {
		imageSrc: "/assets/salon/7.JPG",
		imageAlt: '7'
	 },
	 {
		imageSrc: "/assets/salon/8.JPG",
		imageAlt: '8'
	 },
	 {
		imageSrc: "/assets/salon/9.JPG",
		imageAlt: '9'
	 },
	 {
		imageSrc: "/assets/salon/10.JPG",
		imageAlt: '10'
	 },
	 {
		imageSrc: "/assets/salon/11.JPG",
		imageAlt: '11'
	 },
	 {
		imageSrc: "/assets/salon/12.JPG",
		imageAlt: '12'
	 },
	 {
		imageSrc: "/assets/salon/13.JPG",
		imageAlt: '13'
	 }
  ];

}
