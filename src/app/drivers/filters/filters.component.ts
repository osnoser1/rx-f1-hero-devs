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
import { DriverQuery, Nil } from '../../core/types';
import { SelectFilterDirective } from '../../shared/directives';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    SelectFilterDirective,
  ],
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersComponent {
  @Input() query: Nil<DriverQuery>;

  @Output() queryChange = new EventEmitter<DriverQuery>();
}
