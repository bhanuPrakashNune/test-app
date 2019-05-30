import { Component, OnInit } from '@angular/core';
import { FootballService } from '../network/football.service';
import { IUpcomingGamesResponseData } from '../entity/upcomingGames';
import { Match } from '../entity/match';
import { IAjaxResponse } from '../network/http/ajaxresponse';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-h2h',
  templateUrl: './h2h.component.html',
  styleUrls: ['./h2h.component.css']
})
export class H2hComponent implements OnInit {
  pastGames: Match[] = [];
  pastGames2017: Array<Match> = [];
  pastGames2018: Array<Match> = [];
  pastGames2019: Array<Match> = [];
  homeWins: number = 0;
  draw: number = 0;
  awayWins: number =0;
  

  constructor(private footballService: FootballService, public datepipe: DatePipe) { }

  ngOnInit() {
    this.getPast2017();
    this.getPast2018();
    this.getPast2019();
  }

  private async getPast2017(): Promise<void> {
    try {
      const result: IAjaxResponse = await this.footballService.getH2h("2017");

      if (result.data) {
        let data: IUpcomingGamesResponseData = result.data;
        this.pastGames = data.matches.sort(this.sortMatches);
        this.pastGames2017 = this.getH2hMatchs(this.pastGames);

      }
    } catch (err) {
      console.error('Error occurred in retrieving matches: ' + err);
    }
  }

  private async getPast2018(): Promise<void> {
    try {
      const result: IAjaxResponse = await this.footballService.getH2h("2018");

      if (result.data) {
        let data: IUpcomingGamesResponseData = result.data;
        this.pastGames = [];
        this.pastGames = data.matches.sort(this.sortMatches);
        this.pastGames2018 = this.getH2hMatchs(this.pastGames);

      }
    } catch (err) {
      console.error('Error occurred in retrieving matches: ' + err);
    }
  }

  private async getPast2019(): Promise<void> {
    try {
      const result: IAjaxResponse = await this.footballService.getH2h("2019");

      if (result.data) {
        let data: IUpcomingGamesResponseData = result.data;
        this.pastGames = [];
        this.pastGames = data.matches.sort(this.sortMatches);
        this.pastGames2019 = this.getH2hMatchs(this.pastGames);

      }
    } catch (err) {
      console.error('Error occurred in retrieving matches: ' + err);
    }
  }

  private sortMatches(match1: Match, match2: Match): number {
    return match1.matchday < match2.matchday ? 1 : -1;
  }

  getDate(match: Match): string {
    let date = this.datepipe.transform(match.utcDate, 'MMM dd');
    return date;
  }

  getH2hMatchs(match: Match[]): Match[] {

    let pastH2h: Array<Match> = [];

    for (let i = 0; i < match.length; i++) {
      var temp = match[i];
      var home = temp.homeTeam.name;
      var away = temp.awayTeam.name;

      if ((home == "SC Corinthians Paulista" && away == "São Paulo FC") || (home == "São Paulo FC" && away == "SC Corinthians Paulista")) {

        if(home == "São Paulo FC"){
       
          if(temp.score.winner == "AWAY_TEAM"){
             this.awayWins++;
          }if(temp.score.winner == "DRAW"){
            this.draw++;
          }if(temp.score.winner == "HOME_TEAM"){
             this.homeWins++;
          }
   
        }else if(away == "São Paulo FC"){
         
         if(temp.score.winner == "AWAY_TEAM"){
           this.homeWins++;
        }if(temp.score.winner == "DRAW"){
           this.draw++;
        }if(temp.score.winner == "HOME_TEAM"){
           this.awayWins++;
        }
   
        }

        pastH2h.push(temp);

      }





    }

    return pastH2h;

  }

}
