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
  notifications$!: Subscription;
  setNotifications: boolean = false;
  onLangChangeSub!: Subscription;
  subscriptionName!: Subscription;

  constructor(private router: Router) {}

  ngOnInit() {
    this.setFilteredOptions();
  }

  ngOnDestroy(): void {
    if (this.subscriptionName) {
      this.subscriptionName.unsubscribe();
    }
    if (this.notifications$) {
      this.notifications$.unsubscribe();
    }
    if (this.onLangChangeSub) {
      this.onLangChangeSub.unsubscribe();
    }
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
        text: 'FS.HEADER.OPTIONS.START',
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
    this.router.navigate(['/home/register']);
    this.linkSelected.emit(option);
    this.myControl.reset();
  }

  prevenRefresh(event: any) {
    event.preventDefault();
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');

    this.router.navigate(['login']); 
  }
}
