import { Component, OnInit } from '@angular/core';
import { NewApiServicesService } from '../service/new-api-services.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent implements OnInit {

  constructor( private _services:NewApiServicesService) { }

  techNewsDisplay:any = [];

  ngOnInit(): void {
    this._services.techNews().subscribe((result) => {
      console.log(result);
      this.techNewsDisplay = result.articles;
    });
  }

}
