import { Component, OnInit } from '@angular/core';
import { NewApiServicesService } from '../service/new-api-services.service';

@Component({
  selector: 'app-top-heading',
  templateUrl: './top-heading.component.html',
  styleUrls: ['./top-heading.component.css']
})
export class TopHeadingComponent implements OnInit {

  constructor( private _services:NewApiServicesService) { }

  //display data
  topHeadingDisplay:any = [];

  ngOnInit(): void {

    this._services.topHeading().subscribe((result) => {
      console.log(result);
      this.topHeadingDisplay = result.articles;
    });

  }

}
