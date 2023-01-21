import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DriverStandingsFacade } from './services/driver-standings.facade';
import {
  TablePreviewComponent,
  TablePreviewColumn,
  ListFilterComponent,
  ListFilterItem,
} from '../shared/components';
import { DriverStanding } from '../core/types';
import { toDriverStandingsQueryParams } from './utils/driver-standings-query-object';
import { ON_QUERY_CHANGE_FUNC } from '../core/tokens';

@Component({
  selector: 'app-driver-standings',
  standalone: true,
  imports: [CommonModule, TablePreviewComponent, ListFilterComponent],
  templateUrl: './driver-standings.component.html',
  styleUrls: ['./driver-standings.component.scss'],
  providers: [DriverStandingsFacade],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DriverStandingsComponent {
  facade = inject(DriverStandingsFacade);
  route = inject(ActivatedRoute);
  router = inject(Router);
  onQueryChange = inject(ON_QUERY_CHANGE_FUNC)(toDriverStandingsQueryParams);

  columns: TablePreviewColumn<DriverStanding>[] = [
    { title: 'Pos', value: entity => entity.position },
    {
      title: 'Driver',
      value: ({ Driver }) => `${Driver.givenName} ${Driver.familyName}`,
    },
    {
      title: 'Constructor',
      value: ({ Constructors }) => Constructors[0]?.name,
    },
    { title: 'Points', value: entity => entity.points },
    { title: 'Wins', value: entity => entity.wins },
  ];

  filters: ListFilterItem[] = [
    {
      name: 'season',
      title: 'Season',
      type: 'select',
      options: [2018, 2019, 2020, 2021, 2022],
    },
    {
      name: 'round',
      title: 'Round',
      type: 'select',
      options: [
        { value: 'last', text: 'Last' },
        // Just for code formatting 😜
        ...[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23,
        ],
      ],
    },
  ];
}
