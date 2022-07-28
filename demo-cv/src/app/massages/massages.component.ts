
import { Component,Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { AppComponent } from '../app.component';



interface Item {

	nameMassage: string;
	time: string;
	mainImageUrl: string;
	description: string;
	price: string;
	detail: string;
	id: number;
};


@Component({
  selector: 'app-massages',
  templateUrl: './massages.component.html',
  styleUrls: ['./massages.component.css']
})
export class MassagesComponent  {

	constructor( private router: Router){

	}


	Massages : Item [] = [

		{
			nameMassage: 'АНТИЦЕЛЮЛІТНИЙ МАСАЖ',
	      time: '50хв',
	      mainImageUrl: '/assets/img/foto7.jpg',
	      description: ' Ефективна боротьба з целюлітом Зменшення в обсязі від 3 см Робота з якісною косметикою Позбавлення від “Апельсинової кірки” ',
	      price: '600грн',
	      detail: 'ДЕТАЛЬНІШЕ',
			id: 1, 
		

		},
		{
			nameMassage: 'МЕДОВИЙ МАСАЖ',
	      time: '60хв',
	      mainImageUrl: '/assets/img/foto8.jpg',
	      description: 'Можливість опрацювання окремих зон Робота з натуральними інгредієнтами Ефективна боротьба з целюлітом Медовий масаж від целюліту.',
	      price: '650грн',
	      detail: 'ДЕТАЛЬНІШЕ',
			id: 2, 
		},
		{
			nameMassage: 'МАСАЖ ДЛЯ ВАГІТНИХ',
	      time: '60хв',
	      mainImageUrl: '/assets/img/foto3.jpg',
	      description: 'Поліпшення лімфо і кровообігу Зменшення набряків Запобігання розтяжок Знижує появу варикозую',
	      price: '500грн',
	      detail: 'ДЕТАЛЬНІШЕ',
			id: 3, 
		},
		{
			nameMassage: 'МАСАЖ СТОП',
	      time: '20хв',
	      mainImageUrl: '/assets/img/foto4.jpg',
	      description: 'Зняття втоми в ногах Опрацювання біологічних точок Масаж ніг паличками Загальне поліпшення організму.',
	      price: '400грн',
	      detail: 'ДЕТАЛЬНІШЕ',
			id: 4, 
		},
		{
			nameMassage: 'ЛІМФОДРЕАЖНИЙ МАСАЖ ОБЛИЧЧЯ',
	      time: '30хв',
	      mainImageUrl: '/assets/img/foto5.jpg',
	      description: 'Опрацювання скул на обличчі Масаж лобної частини Усунення зморшок на обличчі Корекція овалу обличчя.',
	      price: '400грн',
	      detail: 'ДЕТАЛЬНІШЕ',
			id: 5, 
		},
		{
			nameMassage: 'КЛАСИЧНИЙ МАСАЖ',
	      time: '30хв',
	      mainImageUrl: '/assets/img/foto6.jpg',
	      description: 'Застосовується при болях в спині Профілактика і лікування хребта Масаж при остеохондрозі Масаж спини для чоловіків і жінок.',
	      price: ' 600 грн',
	      detail: 'ДЕТАЛЬНІШЕ'  ,
			id: 6, 
		},
	];

	
}


 
	


