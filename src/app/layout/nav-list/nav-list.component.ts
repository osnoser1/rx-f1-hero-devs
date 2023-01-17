import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-list',
  standalone: true,
  imports: [CommonModule, MatListModule, RouterModule],
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavListComponent {
  readonly links = [
    { url: 'drivers', text: 'Drivers' },
    { url: 'races', text: 'Races' },
    { url: 'qualifying', text: 'Qualifying Results' },
    { url: 'driver-standings', text: 'Standings' },
    { url: 'statistics', text: '2021 season statistics' },
  ];
}
