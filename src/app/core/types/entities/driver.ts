import { PageQuery } from '../page-query';

export interface Driver {
  driverId: string;
  url: string;
  code?: string;
  givenName: string;
  familyName: string;
  permanentNumber: string;
  dateOfBirth: string;
  nationality: string;
}

export interface DriverQuery extends PageQuery {
  season?: number;
}
