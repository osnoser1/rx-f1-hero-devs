import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DriverStandingsFacade } from './services/driver-standings.facade';
import {
  TablePreviewComponent,
  TablePreviewColumn,
} from '../shared/components';
import { DriverStanding, PageQuery } from '../core/types';
import { FiltersComponent } from './filters/filters.component';
import { toDriverStandingsQueryParams } from './utils/driver-standings-query-object';

@Component({
  selector: 'app-driver-standings',
  standalone: true,
  imports: [CommonModule, FiltersComponent, TablePreviewComponent],
  templateUrl: './driver-standings.component.html',
  styleUrls: ['./driver-standings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DriverStandingsComponent {
  facade = inject(DriverStandingsFacade);
  route = inject(ActivatedRoute);
  router = inject(Router);

  columns: TablePreviewColumn<DriverStanding>[] = [
    { name: 'pos', title: 'Pos', value: entity => entity.position },
    {
      name: 'driver',
      title: 'Driver',
      value: ({ Driver }) => `${Driver.givenName} ${Driver.familyName}`,
    },
    {
      name: 'constructor',
      title: 'Constructor',
      value: ({ Constructors }) => Constructors[0]?.name,
    },
    { name: 'points', title: 'Points', value: entity => entity.points },
    { name: 'wins', title: 'Wins', value: entity => entity.wins },
  ];

  async onQueryChange(query: PageQuery) {
    return await this.router.navigate([], {
      queryParams: toDriverStandingsQueryParams({
        ...this.route.snapshot.queryParams,
        ...query,
      }),
    });
  }
}
