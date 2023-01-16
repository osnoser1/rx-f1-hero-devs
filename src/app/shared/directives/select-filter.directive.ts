import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { map, Subject, takeUntil } from 'rxjs';
import { PageQuery } from '../../core/types';

@Directive({
  selector: '[appSelectFilter]',
  standalone: true,
})
export class SelectFilterDirective implements AfterViewInit, OnDestroy {
  elementRef = inject(ElementRef<HTMLElement>);
  select = inject(MatSelect, { self: true });

  @Input('appSelectFilter') name!: string;

  @Output() queryChange = new EventEmitter<PageQuery>();

  private destroy$ = new Subject<void>();

  ngAfterViewInit() {
    const source$ = this.getSource();
    source$
      .pipe(takeUntil(this.destroy$))
      .subscribe(query => this.queryChange.emit(query));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getSource() {
    return this.select.selectionChange.pipe(
      map(change =>
        Array.isArray(change.value) ? change.value.join(',') : change.value,
      ),
      map(value => ({ page: 0, [this.name]: value })),
    );
  }
}
