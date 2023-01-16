import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-full-screen-loading-spinner',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './full-screen-loading-spinner.component.html',
  styleUrls: ['./full-screen-loading-spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullScreenLoadingSpinnerComponent {}
