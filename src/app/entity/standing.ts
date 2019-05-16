import { Competition, Season, Filters } from './match'

export class Team {
    id: number;
    name: string;
    crestUrl: string;
}

export class Table {
    position: number;
    team: Team;
    playedGames: number;
    won: number;
    draw: number;
    lost: number;
    points: number;
    goalsFor: number;
    goalsAgainst: number;
    goalDifference: number;
}

export class Standing {
    stage: string;
    type: string;
    group: string;
    table: Table[];
}

export interface IStandingsResponseData {
    filters: Filters;
    competition: Competition;
    season: Season;
    standings: Standing[];
}

export class StandingsResponseData implements IStandingsResponseData {
    filters: Filters;
    competition: Competition;
    season: Season;
    standings: Standing[];
  }