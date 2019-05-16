export class Area {
  id: number;
  name: string;
}

export class Competition {
  id: number;
  name: string;
  area: Area;
  code: string;
  plan: string;
  lastUpdated: string;
}

export class Season {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number;
  winner: string;
}

export class MatchTime {
  homeTeam: string;
  awayTeam: string;
}

export class Team {
  id: number;
  name: string;
}

export class Score {
  winner: string;
  duration: string;
  fullTime: MatchTime;
  halfTime: MatchTime;
  extraTime: MatchTime;
  penalties: MatchTime;
}

export class Filters {
  dateFrom: string;
  dateTo: string;
  permission: string;
}

export class Match {
  id: number;
  competition: Competition;
  season: Season;
  utcDate: string;
  status: string;
  matchday: number;
  stage: string;
  group: string;
  lastUpdated: string;
  score: Score;
  homeTeam: Team;
  awayTeam: Team;
  referees: any[];
}

export interface IMatchResponseData {
  count: number;
  filters: Filters;
  matches: Match[];
}

export class MatchResponseData implements IMatchResponseData {
  count: number;
  filters: Filters;
  matches: Match[];

  copy(source: IMatchResponseData): void {
    if (!source) {
      return;
    }

    this.count = source.count;
    this.filters = source.filters;
    this.matches = source.matches;
  }
}


