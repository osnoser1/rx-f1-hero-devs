import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { isString } from 'lodash-es';
import { ListResponse, Nil, PageQuery } from '../../../core/types';
import { TablePreviewColumn } from './table-preview-column';

@Component({
  selector: 'app-table-preview',
  standalone: true,
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatTableModule,
  ],
  templateUrl: './table-preview.component.html',
  styleUrls: ['./table-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TablePreviewComponent<T> implements OnChanges {
  @Input() data: Nil<ListResponse<T>>;
  @Input() loading: Nil<boolean>;
  @Input() query: Nil<PageQuery>;
  @Input() columns!: TablePreviewColumn<T>[];

  @Output() queryChange = new EventEmitter<PageQuery>();

  displayedColumns: string[] = [];

  get(prop: string | ((entity: T) => string), entity: T) {
    return isString(prop) ? prop : prop(entity);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['columns']) {
      this.displayedColumns = (
        (changes['columns'].currentValue ?? []) as TablePreviewColumn<T>[]
      ).map(({ name }) => name);
    }
  }
}
