import { Component, OnInit } from '@angular/core';
import { NewApiServicesService } from '../service/new-api-services.service';

@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.css'],
})
export class BusinessNewsComponent implements OnInit {
  constructor(private _services: NewApiServicesService) {}

  businessNewsDisplay: any = [];

  ngOnInit(): void {
    this._services.businessNews().subscribe((result) => {
      console.log(result);
      this.businessNewsDisplay = result.articles;
    });
  }
}
