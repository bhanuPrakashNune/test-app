import { Component, OnInit } from '@angular/core';
import { FootballService } from '../../src/app/network/football.service';
import { IUpcomingGamesResponseData } from '../../src/app/entity/upcomingGames';
import {Match} from '../../src/app/entity/match';
import { IAjaxResponse } from '../../src/app/network/http/ajaxresponse';
import {DatePipe } from '@angular/common'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  upcomingGames : Match ;
  pastGames : Match[] = [];
  pastGame : Match;
  lastFive: string[] = [];

  constructor(private footballService: FootballService,public datepipe: DatePipe, private router: Router) {
  }

  ngOnInit() : void{
    this.getStandings();
    this.getPastGames();
    this.router.navigate(['/table']);
    document.getElementById("a-tb").focus();
  }
  private async getStandings(): Promise<void> {
    try {
      const result: IAjaxResponse = await this.footballService.getUpcomingGames();
      
      if (!!result.data) {
        let data: IUpcomingGamesResponseData = result.data;
        this.upcomingGames = data.matches[0];

        
        
      }
    } catch (err) {
      console.error('Error occurred in retrieving matches: ' + err);
    }
  }

  private async getPastGames(): Promise<void> {
    try {
      const result: IAjaxResponse = await this.footballService.getPastGames();
      
      if (result.data) {
        let data: IUpcomingGamesResponseData = result.data;
        this.pastGames = data.matches.sort(this.sortMatches);
        this.lastFivematch(this.pastGames);
        this.pastGame = this.pastGames[0];
        
      }
    } catch (err) {
      console.error('Error occurred in retrieving matches: ' + err);
    }
  }

  private sortMatches(match1: Match, match2: Match): number {
    return match1.matchday < match2.matchday ? 1 : -1;
  }

  getDateUpcoming(match: Match): string{
   let date = this.datepipe.transform(match.utcDate, 'MMM dd, HH:mm');
   return date;
  }

  getDatePast(match: Match): string{
    let date = this.datepipe.transform(match.utcDate, 'MMM dd');
    return date;
   }

  aboutClick(trigger: number){
    if(trigger == 0){
      document.getElementById("aboutdiv").style.display = "block";
    } else {
      document.getElementById("aboutdiv").style.display = "none";
    }
  }

  lastFivematch(match: Match[]){

    for(let i = 0; i < match.length ; i++){
     var temp = match[i];

     var home = temp.homeTeam.name;
     var away = temp.awayTeam.name;

     if(home == "São Paulo FC"){
       
       if(temp.score.winner == "AWAY_TEAM"){
          this.lastFive[i] = "L.svg";
       }if(temp.score.winner == "DRAW"){
          this.lastFive[i] = "D.svg"
       }if(temp.score.winner == "HOME_TEAM"){
          this.lastFive[i] = "W.svg"
       }

     }else if(away == "São Paulo FC"){
      
      if(temp.score.winner == "AWAY_TEAM"){
        this.lastFive[i] = "W.svg";
     }if(temp.score.winner == "DRAW"){
        this.lastFive[i] = "D.svg"
     }if(temp.score.winner == "HOME_TEAM"){
        this.lastFive[i] = "L.svg"
     }

     }


    }


  }


}
