import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-list',
  standalone: true,
  imports: [NgFor, MatListModule, RouterLink],
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
