import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { IMatchResponseData, MatchResponseData, Match } from './entity/match';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'test-app';
  matchData: MatchResponseData;

  constructor(private http: HttpClient) {
  }

  ngOnInit() : void{
    this.getMatches();
  }

  private getMatches(): void {
    const headers = new HttpHeaders({
      "X-Auth-Token": "6762f97d76994839b28307d65e54f35c",
    });
    this.http.get("http://api.football-data.org/v2/competitions/BSA/matches", {headers}).subscribe(data => {
      
      this.matchData = new MatchResponseData();
      let matchResponseData = <IMatchResponseData> data;
      this.matchData.copy(matchResponseData);
      let sortedMatches = this.matchData.matches.sort(this.sortMatches);
     
    });
  }

  private sortMatches(match1: Match, match2: Match): number {
    return match1.matchday < match2.matchday ? 1 : -1;
  }
}
