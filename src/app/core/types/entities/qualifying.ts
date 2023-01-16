import { Driver } from './driver';
import { Circuit } from './circuit';
import { Constructor } from './constructor';
import { PageQuery } from '../page-query';

export interface QualifyingResult {
  number: string;
  position: string;
  Driver: Driver;
  Constructor: Constructor;
  Q1: string;
  Q2: string;
  Q3: string;
}

export interface Qualifying {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time: string;
  QualifyingResults: QualifyingResult[];
}

export interface QualifyingQuery extends PageQuery {
  round?: number;
  season?: number;
}
