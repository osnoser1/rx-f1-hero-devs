import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DriversFacade } from './services/drivers.facade';
import {
  TablePreviewComponent,
  TablePreviewColumn,
} from '../shared/components';
import { Driver, PageQuery } from '../core/types';
import { toQueryParams } from '../core/utils';
import { FiltersComponent } from './filters/filters.component';
import { toRaceQueryParams } from './utils/driver-query-object';

@Component({
  selector: 'app-drivers',
  standalone: true,
  imports: [CommonModule, FiltersComponent, TablePreviewComponent],
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DriversComponent {
  facade = inject(DriversFacade);
  route = inject(ActivatedRoute);
  router = inject(Router);

  columns: TablePreviewColumn<Driver>[] = [
    { name: 'id', title: 'Id', value: entity => entity.driverId },
    {
      name: 'name',
      title: 'Name',
      value: entity => `${entity.givenName} ${entity.familyName}`,
    },
    {
      name: 'permanentNumber',
      title: 'Permanent Number',
      value: entity => entity.permanentNumber,
    },
    {
      name: 'nationality',
      title: 'Nationality',
      value: entity => entity.nationality,
    },
    { name: 'dob', title: 'DOB', value: entity => entity.dateOfBirth },
    {
      name: 'info',
      title: 'Information',
      value: { url: entity => entity.url, text: 'Biography' },
      type: 'link',
    },
  ];

  async onQueryChange(query: PageQuery) {
    return await this.router.navigate([], {
      queryParams: toRaceQueryParams({
        ...this.route.snapshot.queryParams,
        ...query,
      }),
    });
  }
}
