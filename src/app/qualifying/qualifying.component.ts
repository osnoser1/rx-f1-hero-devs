import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { QualifyingFacade } from './services/qualifying.facade';
import {
  TablePreviewComponent,
  TablePreviewColumn,
  FullScreenLoadingSpinnerComponent,
} from '../shared/components';
import { Qualifying, PageQuery, QualifyingResult } from '../core/types';
import { FiltersComponent } from './filters/filters.component';
import { toQualifyingQueryParams } from './utils/qualifying-query-object';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QualifyingComponent {
  facade = inject(QualifyingFacade);
  route = inject(ActivatedRoute);
  router = inject(Router);

  columns: TablePreviewColumn<QualifyingResult>[] = [
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
    { name: 'q1', title: 'Q1', value: entity => entity.Q1 },
    { name: 'q2', title: 'Q2', value: entity => entity.Q2 },
    { name: 'q3', title: 'Q3', value: entity => entity.Q3 },
  ];

  async onQueryChange(query: PageQuery) {
    return await this.router.navigate([], {
      queryParams: toQualifyingQueryParams({
        ...this.route.snapshot.queryParams,
        ...query,
      }),
    });
  }
}
