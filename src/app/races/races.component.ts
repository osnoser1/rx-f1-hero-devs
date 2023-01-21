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
    { title: 'Pos', value: entity => entity.position },
    { title: 'No', value: entity => entity.number },
    {
      title: 'Driver',
      value: ({ Driver }) => `${Driver.givenName} ${Driver.familyName}`,
    },
    { title: 'Constructor', value: ({ Constructor }) => Constructor.name },
    { title: 'Laps', value: entity => entity.laps },
    { title: 'Grid', value: entity => entity.grid },
    { title: 'Time', value: ({ Time }) => Time?.time ?? '' },
    { title: 'Status', value: entity => entity.status },
    { title: 'Points', value: entity => entity.points },
  ];
}
