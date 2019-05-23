import { Component, OnInit } from '@angular/core';
import { FootballService } from '../network/football.service';
import { IUpcomingGamesResponseData } from '../entity/upcomingGames';
import {Match} from '../entity/match';
import { IAjaxResponse } from '../network/http/ajaxresponse';
import {DatePipe } from '@angular/common';

@Component({
  selector: 'app-past-games',
  templateUrl: './past-games.component.html',
  styleUrls: ['./past-games.component.css']
})
export class PastGamesComponent implements OnInit {
  pastGames : Match[] = [];

  constructor(private footballService: FootballService,public datepipe: DatePipe) { }

  ngOnInit() {
    this.getPastGames();
  }

  private async getPastGames(): Promise<void> {
    try {
      const result: IAjaxResponse = await this.footballService.getPastGames();
      
      if (!!result.data) {
        let data: IUpcomingGamesResponseData = result.data;
        this.pastGames = data.matches.sort(this.sortMatches);
        console.log(this.pastGames);
      }
    } catch (err) {
      console.error('Error occurred in retrieving matches: ' + err);
    }
  }

  private sortMatches(match1: Match, match2: Match): number {
    return match1.matchday < match2.matchday ? 1 : -1;
  }

  getDate(match: Match): string{
    let date = this.datepipe.transform(match.utcDate, 'MMMM dd');
    return date;
   }

}
