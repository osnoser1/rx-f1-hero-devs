import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DriversFacade } from './services/drivers.facade';
import {
  TablePreviewComponent,
  TablePreviewColumn,
  ListFilterItem,
  ListFilterComponent,
} from '../shared/components';
import { Driver } from '../core/types';
import { toDriverQueryParams } from './utils/driver-query-object';
import { ON_QUERY_CHANGE_FUNC } from '../core/tokens';

@Component({
  selector: 'app-drivers',
  standalone: true,
  imports: [CommonModule, TablePreviewComponent, ListFilterComponent],
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss'],
  providers: [DriversFacade],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DriversComponent {
  facade = inject(DriversFacade);
  route = inject(ActivatedRoute);
  router = inject(Router);
  onQueryChange = inject(ON_QUERY_CHANGE_FUNC)(toDriverQueryParams);

  columns: TablePreviewColumn<Driver>[] = [
    { title: 'Id', value: entity => entity.driverId },
    {
      title: 'Name',
      value: entity => `${entity.givenName} ${entity.familyName}`,
    },
    { title: 'Permanent Number', value: entity => entity.permanentNumber },
    { title: 'Nationality', value: entity => entity.nationality },
    { title: 'DOB', value: entity => entity.dateOfBirth },
    {
      title: 'Information',
      value: { url: entity => entity.url, text: 'Biography' },
      type: 'link',
    },
  ];

  filters: ListFilterItem[] = [
    {
      name: 'season',
      title: 'Season',
      type: 'select',
      options: [2018, 2019, 2020, 2021, 2022],
    },
  ];
}
