import { Area, Competition } from './match';


export interface ISquad {
    id: number;
    area: Area;
    activeCompetitions: Competition[];
    name: string;
    shortName: string;
    tla: string;
    crestUrl: string;
    address: string;
    phone: string;
    website: string;
    email: string;
    founded: number;
    clubColors: string;
    venue: string;
    squad: Player[];

}
  

export class Squad implements ISquad {

    id: number;
    area: Area;
    activeCompetitions: Competition[];
    name: string;
    shortName: string;
    tla: string;
    crestUrl: string;
    address: string;
    phone: string;
    website: string;
    email: string;
    founded: number;
    clubColors: string;
    venue: string;
    squad: Player[];
   
}

export class Player{
    id: number;
    name: string;
    position: string;
    dateOfBirth: string;
    countryOfBirth: string;
    nationality: string;
    shirtNumber: string;
    role: string;
}