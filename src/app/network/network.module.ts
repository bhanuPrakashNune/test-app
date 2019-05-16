import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FootballService } from './football.service';

@NgModule({
  providers: [
    FootballService
  ],
  imports: [
    HttpClientModule
  ]
})
export class NetworkModule { }
