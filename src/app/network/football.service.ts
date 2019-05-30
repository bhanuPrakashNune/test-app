import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAjaxResponse } from './http/ajaxresponse';
import { HttpService } from './http/http.service';

@Injectable()
export class FootballService extends HttpService {
  constructor(http: HttpClient) {
    super(http);
  }

  getMatches(): Promise<IAjaxResponse> {
    const url: string = 'https://api.football-data.org/v2/matches';
    return this.httpGet(url);
  }

  getStandings(): Promise<IAjaxResponse> {
    const url: string = 'https://api.football-data.org/v2/competitions/BSA/standings';
    return this.httpGet(url);
  }

  getUpcomingGames(): Promise<IAjaxResponse> {
    const url: string = 'https://api.football-data.org/v2/teams/1776/matches?status=SCHEDULED';
    return this.httpGet(url);
  }

  getPastGames(): Promise<IAjaxResponse> {
    const url: string = 'https://api.football-data.org/v2/teams/1776/matches?status=FINISHED';
    return this.httpGet(url);
  }

  getSquad(): Promise<IAjaxResponse> {
    const url: string = 'https://api.football-data.org/v2/teams/1776';
    return this.httpGet(url);
  }

  getH2h(year : string): Promise<IAjaxResponse> {
    const url: string = 'https://api.football-data.org/v2/competitions/BSA/matches?season='+year+'&status=FINISHED';
    return this.httpGet(url);
  }

}
