import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { Nil, PageQuery } from '../../../core/types';
import { SelectFilterDirective } from '../../directives';
import { ListFilterItem, ListFilterSelectItemOption } from './list-filter-item';

@Component({
  selector: 'app-list-filter',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    SelectFilterDirective,
  ],
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListFilterComponent {
  @Input() filters!: ListFilterItem[];
  @Input() query: Nil<PageQuery>;

  @Output() queryChange = new EventEmitter<PageQuery>();

  getSelectOption(
    option: ListFilterSelectItemOption,
    type: 'value' | 'text',
  ): string | number {
    return (option as any)[type] ?? option;
  }
}
