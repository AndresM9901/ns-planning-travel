import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Page } from '@nativescript/core';

@Component({
  selector: 'hotels',
  templateUrl: './hotels.html',
  styleUrls: ['./hotels.css'],
})
export class HotelsComponent implements OnInit {

  public hotels = [
    {
      img: 'https://lbcdn.airpaz.com/hotelimages/3745485/liebling-e079951c43a82d1a23acc1d67c63d4b1.jpg',
      name: 'Hospedaje 1',
      price: 100,
      rating: 5
    },
    {
      img: 'https://lbcdn.airpaz.com/hotelimages/3745485/liebling-e079951c43a82d1a23acc1d67c63d4b1.jpg',
      name: 'Hospedaje 2',
      price: 200,
      rating: 4
    },
    {
      img: 'https://lbcdn.airpaz.com/hotelimages/3745485/liebling-e079951c43a82d1a23acc1d67c63d4b1.jpg',
      name: 'Hospedaje 3',
      price: 300,
      rating: 3
    }
  ]
  public constructor(private router: Router, private page: Page) { }

  ngOnInit() {
    this.page.actionBarHidden = true;
  }
}