import { Component, OnInit } from '@angular/core';
import { FootballService } from '../network/football.service'
import { IUpcomingGamesResponseData } from '../entity/upcomingGames'
import {Match} from '../entity/match'
import { IAjaxResponse } from '../network/http/ajaxresponse';
import {DatePipe } from '@angular/common'


@Component({
  selector: 'app-upcoming-games',
  templateUrl: './upcoming-games.component.html',
  styleUrls: ['./upcoming-games.component.css']
})
export class UpcomingGamesComponent implements OnInit {

  upcomingGames : Match[] = [];

  constructor(private footballService: FootballService,public datepipe: DatePipe) { }

  ngOnInit() {
    this.getStandings();
  }

  private async getStandings(): Promise<void> {
    try {
      const result: IAjaxResponse = await this.footballService.getUpcomingGames();
      
      if (!!result.data) {
        let data: IUpcomingGamesResponseData = result.data;
        this.upcomingGames = data.matches;
        
      }
    } catch (err) {
      console.error('Error occurred in retrieving matches: ' + err);
    }
  }

  getDate(match: Match): string{


   let date = this.datepipe.transform(match.utcDate, 'MMMM dd');
   return date;
  }


  

}
