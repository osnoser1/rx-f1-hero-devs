import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { RacesFacade } from '../races/services/races.facade';
import {
  FullScreenLoadingSpinnerComponent,
  TablePreviewColumn,
  TablePreviewComponent,
} from '../shared/components';
import { RaceResult } from '../core/types';
import { FiltersComponent } from './filters/filters.component';
import { toRaceQueryParams } from './utils/race-query-object';
import { ON_QUERY_CHANGE_FUNC } from '../core/tokens';

@Component({
  selector: 'app-races',
  standalone: true,
  imports: [
    CommonModule,
    FiltersComponent,
    TablePreviewComponent,
    FullScreenLoadingSpinnerComponent,
  ],
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.scss'],
  providers: [RacesFacade],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RacesComponent {
  facade = inject(RacesFacade);
  route = inject(ActivatedRoute);
  router = inject(Router);
  onQueryChange = inject(ON_QUERY_CHANGE_FUNC)(toRaceQueryParams);

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
}
