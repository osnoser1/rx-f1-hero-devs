import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { QualifyingFacade } from './services/qualifying.facade';
import {
  TablePreviewComponent,
  TablePreviewColumn,
  FullScreenLoadingSpinnerComponent,
  ListFilterComponent,
} from '../shared/components';
import { QualifyingResult } from '../core/types';
import { toQualifyingQueryParams } from './utils/qualifying-query-object';
import { ON_QUERY_CHANGE_FUNC } from '../core/tokens';
import { ListFilterItem } from '../shared/components/list-filter/list-filter-item';

@Component({
  selector: 'app-qualifying',
  standalone: true,
  imports: [
    CommonModule,
    ListFilterComponent,
    TablePreviewComponent,
    FullScreenLoadingSpinnerComponent,
  ],
  templateUrl: './qualifying.component.html',
  styleUrls: ['./qualifying.component.scss'],
  providers: [QualifyingFacade],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QualifyingComponent {
  facade = inject(QualifyingFacade);
  route = inject(ActivatedRoute);
  router = inject(Router);
  onQueryChange = inject(ON_QUERY_CHANGE_FUNC)(toQualifyingQueryParams);

  columns: TablePreviewColumn<QualifyingResult>[] = [
    { title: 'Pos', value: entity => entity.position },
    { title: 'No', value: entity => entity.number },
    {
      title: 'Driver',
      value: ({ Driver }) => `${Driver.givenName} ${Driver.familyName}`,
    },
    { title: 'Constructor', value: ({ Constructor }) => Constructor.name },
    { title: 'Q1', value: entity => entity.Q1 },
    { title: 'Q2', value: entity => entity.Q2 },
    { title: 'Q3', value: entity => entity.Q3 },
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
        { value: 'all', text: 'All' },
        // Just for code formatting 😜
        ...[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23,
        ],
      ],
    },
  ];
}
