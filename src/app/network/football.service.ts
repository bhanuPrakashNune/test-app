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
    const url: string = 'http://api.football-data.org/v2/competitions/BSA/standings';
    return this.httpGet(url);
  }
}
