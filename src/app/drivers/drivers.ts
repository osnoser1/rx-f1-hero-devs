import { PageQuery } from '../core/types';

export interface Driver {
  driverId: string;
  url: string;
  givenName: string;
  familyName: string;
  permanentNumber: string;
  dateOfBirth: string;
  nationality: string;
}

export type DriverQuery = PageQuery;
