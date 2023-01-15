import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-preview.component.html',
  styleUrls: ['./table-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TablePreviewComponent {}
