import { Component, OnInit } from '@angular/core';
import { FootballService } from '../network/football.service'
import { IAjaxResponse } from '../network/http/ajaxresponse';
import { ISquad, Squad, Player } from '../entity/squad';

@Component({
  selector: 'app-squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.css']
})
export class SquadComponent implements OnInit {
  players: Player[];
  goalKeepers: Array<string> = [];
  midfielders: Array<string> = [];
  defenders: Array<string> = [];
  strikers: Array<string> = [];

  constructor(private footballService: FootballService) { }

  ngOnInit() {
    this.getSquardData();
  }

  private async getSquardData(): Promise<void> {
    try {
      const result: IAjaxResponse = await this.footballService.getSquad();

      if (result.data) {
        let data: ISquad = result.data;
        this.players = data.squad;
        this.sortPlayers(this.players);
        console.log(this.goalKeepers);
        console.log(this.midfielders);
        console.log(this.defenders);
        console.log(this.strikers);
      }
    } catch (err) {
      console.error('Error occurred in retrieving matches: ' + err);
    }
  }


  sortPlayers(players: Player[]): void {

    for (let player of players) {
      let playerPosition = player.position;

      switch (playerPosition) {

        case "Goalkeeper": {
          this.goalKeepers.push(player.name);
        }

        case "Defender": {
          this.defenders.push(player.name);
        }

        case "Midfielder": {
          this.midfielders.push(player.name);
        }

        case "Attacker": {
          this.strikers.push(player.name);
        }

      }

    }

  }

}
