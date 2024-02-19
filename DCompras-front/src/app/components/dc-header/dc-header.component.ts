import {
  Component,
  OnInit,
  ViewEncapsulation,
  EventEmitter,
  Output,
  Input,
  OnDestroy,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription, map, startWith, take } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dc-header',
  templateUrl: './dc-header.component.html',
  styleUrls: ['./dc-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DcHeaderComponent implements OnInit, OnDestroy {
  @Output() linkSelected = new EventEmitter<any>();
  myControl = new FormControl('');
  @Input() pageTitle: string = '';
  options!: any[];
  filteredOptions!: Observable<any[]>;
  setNotifications: boolean = false;
  onLangChangeSub!: Subscription;
  subscriptionName!: Subscription;

  constructor(private router: Router) {}

  ngOnInit() {
    this.setFilteredOptions();
  }

  ngOnDestroy(): void {
    this.subscriptionName.unsubscribe();
  }

  private setFilteredOptions() {
    this.setOptions();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private setOptions() {
    this.options = [
      {
        link: 'register',
        text: 'Registro',
        selected: false,
      },
      {
        link: 'cards',
        text: 'FS.HEADER.OPTIONS.CARD',
        selected: false,
      },
      {
        link: 'loan',
        text: 'FS.HEADER.OPTIONS.LOANS',
        selected: false,
      },
      {
        link: 'pay-service',
        text: 'FS.HEADER.OPTIONS.PAY SERVICE',
        selected: false,
      },
      {
        link: 'operaciones',
        text: 'FS.HEADER.OPTIONS.OPERATIONS',
        selected: false,
      },
      {
        link: 'we-offer',
        text: 'FS.HEADER.OPTIONS.WE OFFER YOU',
        selected: false,
      },
      {
        link: 'insurances',
        text: 'FS.HEADER.OPTIONS.INSURANCE',
        selected: false,
      },
      {
        link: 'points',
        text: 'FS.HEADER.OPTIONS.POINTS',
        selected: false,
      },
      {
        link: 'help',
        text: 'FS.HEADER.OPTIONS.SUPPORT',
        selected: false,
      },
    ];
  }

  _filter(value: string): any[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.text.toLowerCase().includes(filterValue)
    );
  }

  onSelect(option: any) {
    this.router.navigate(['/DCompras/' + option]);
    this.linkSelected.emit(option);
    this.myControl.reset();
  }

  prevenRefresh(event: any) {
    event.preventDefault();
  }
}
