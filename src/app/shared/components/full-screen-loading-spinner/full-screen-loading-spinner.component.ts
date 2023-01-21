import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-full-screen-loading-spinner',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './full-screen-loading-spinner.component.html',
  styleUrls: ['./full-screen-loading-spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullScreenLoadingSpinnerComponent {}
