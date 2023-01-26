import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { camelCase, isString } from 'lodash-es';
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
  @Input() showPagination = true;

  @Output() queryChange = new EventEmitter<PageQuery>();

  @HostBinding('class.mat-elevation-z8') elevation = true;

  displayedColumns: string[] = [];

  get(prop: string | ((entity: T) => string), entity: T) {
    return isString(prop) ? prop : prop(entity);
  }

  getColumnName({ name, title }: TablePreviewColumn<T>, index: number) {
    return camelCase(name ?? this.get(title, {} as any) ?? `column-${index}`);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['columns']) {
      this.displayedColumns = (
        (changes['columns'].currentValue ?? []) as TablePreviewColumn<T>[]
      ).map(this.getColumnName.bind(this));
    }
  }
}
