import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriversFacade } from './services/drivers.facade';
import { TablePreviewComponent } from './table-preview/table-preview.component';

@Component({
  selector: 'app-drivers',
  standalone: true,
  imports: [CommonModule, TablePreviewComponent],
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DriversComponent {
  facade = inject(DriversFacade);
}
