import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { map, Subject } from 'rxjs';
import { NavListComponent } from './nav-list/nav-list.component';
import { ErrorService } from '../core/services';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSnackBarModule,
    MatSidenavModule,
    NavListComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit, OnDestroy {
  private readonly errorService = inject(ErrorService);
  private readonly snackBar = inject(MatSnackBar);
  private readonly destroy$ = new Subject<void>();

  ngOnInit() {
    this.errorService.retryWhenError(() =>
      this.snackBar
        .open('Error, please try again.', 'Retry', { duration: 3000 })
        .afterDismissed()
        .pipe(map(({ dismissedByAction }) => dismissedByAction)),
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
