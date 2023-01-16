import { Driver } from './driver';
import { Constructor } from './constructor';
import { PageQuery } from '../page-query';

export interface DriverStanding {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Driver: Driver;
  Constructors: Constructor[];
}

export interface DriverStandings {
  season: string;
  round: string;
  DriverStandings: DriverStanding[];
}

export interface DriverStandingQuery extends PageQuery {
  round?: number | string;
  season?: number;
}
