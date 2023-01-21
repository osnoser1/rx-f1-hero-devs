import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { QualifyingFacade } from './services/qualifying.facade';
import {
  TablePreviewComponent,
  TablePreviewColumn,
  FullScreenLoadingSpinnerComponent,
} from '../shared/components';
import { QualifyingResult } from '../core/types';
import { FiltersComponent } from './filters/filters.component';
import { toQualifyingQueryParams } from './utils/qualifying-query-object';
import { ON_QUERY_CHANGE_FUNC } from '../core/tokens';

@Component({
  selector: 'app-qualifying',
  standalone: true,
  imports: [
    CommonModule,
    FiltersComponent,
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
}
