import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { H2hComponent } from './h2h/h2h.component';
import { PastGamesComponent } from './past-games/past-games.component';
import { UpcomingGamesComponent } from './upcoming-games/upcoming-games.component';
import { TableComponent } from './table/table.component';
import { SquadComponent } from './squad/squad.component'
import { NetworkModule } from './network/network.module'

@NgModule({
  declarations: [
    AppComponent,
    H2hComponent,
    PastGamesComponent,
    UpcomingGamesComponent,
    TableComponent,
    SquadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NetworkModule,
    RouterModule.forRoot([
      {path: 'H2H' , component : H2hComponent },
      {path: 'pastGames' , component : PastGamesComponent },
      {path: 'upcomingGames' , component : UpcomingGamesComponent },
      {path: 'table' , component : TableComponent },
      {path: 'squad' , component : SquadComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
