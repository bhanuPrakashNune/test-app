import { Match } from './match'

export class Filters {
    permission: number;
    status: string[];
    limit: number;
  }

export interface IUpcomingGamesResponseData {
    count: number;
    filters: Filters;
    matches: Match[];
}

export class UpcomingGamesResponseDat implements IUpcomingGamesResponseData {
    count: number;
    filters: Filters;
    matches: Match[];
  }