import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeadingComponent } from './top-heading/top-heading.component';

import { HttpClientModule } from '@angular/common/http';
import { NewApiServicesService } from './service/new-api-services.service';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { BusinessNewsComponent } from './business-news/business-news.component';

// for HttpClient import:
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@NgModule({
  declarations: [
    AppComponent,
    TopHeadingComponent,
    TechNewsComponent,
    BusinessNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
  ],
  providers: [NewApiServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
