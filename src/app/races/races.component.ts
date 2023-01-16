import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { RacesFacade } from '../races/services/races.facade';
import {
  TablePreviewColumn,
  TablePreviewComponent,
} from '../shared/components';
import { PageQuery, RaceResult } from '../core/types';
import { FiltersComponent } from './filters/filters.component';
import { toRaceQueryParams } from './utils/race-query-object';

@Component({
  selector: 'app-races',
  standalone: true,
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    FiltersComponent,
    TablePreviewComponent,
  ],
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RacesComponent {
  facade = inject(RacesFacade);
  route = inject(ActivatedRoute);
  router = inject(Router);

  columns: TablePreviewColumn<RaceResult>[] = [
    { name: 'pos', title: 'Pos', value: entity => entity.position },
    { name: 'no', title: 'No', value: entity => entity.number },
    {
      name: 'driver',
      title: 'Driver',
      value: ({ Driver }) => `${Driver.givenName} ${Driver.familyName}`,
    },
    {
      name: 'constructor',
      title: 'Constructor',
      value: ({ Constructor }) => Constructor.name,
    },
    { name: 'laps', title: 'Laps', value: entity => entity.laps },
    { name: 'grid', title: 'Grid', value: entity => entity.grid },
    { name: 'time', title: 'Time', value: ({ Time }) => Time?.time ?? '' },
    { name: 'status', title: 'Status', value: entity => entity.status },
    { name: 'points', title: 'Points', value: entity => entity.points },
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
