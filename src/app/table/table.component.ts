import { Component, OnInit } from '@angular/core';
import { FootballService } from '../network/football.service'
import { Table, IStandingsResponseData } from '../entity/standing'
import { IAjaxResponse } from '../network/http/ajaxresponse';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  standings: Table[] = [];

  constructor(private footballService: FootballService) { }

  ngOnInit() {
    this.getStandings();
  }

  private async getStandings(): Promise<void> {
    try {
      const result: IAjaxResponse = await this.footballService.getStandings();
      console.log(result.data);
      if (!!result.data) {
        let data: IStandingsResponseData = result.data;
        this.standings = data.standings[0].table;
      }
    } catch (err) {
      console.error('Error occurred in retrieving matches: ' + err);
    }
  }
}
