import * as angular from 'angular';

import {
    Component,
    Inject,
    OnInit,
} from '@angular/core';

import {
    FormControl,
    FormGroup,
} from '@angular/forms';

import {
    debounceTime,
    distinctUntilChanged,
} from 'rxjs/operators';

import { downgradeComponent } from '@angular/upgrade/static';
import { ContactService } from '../../services/contact.service';


@Component({
    selector: 'search',
    templateUrl: 'app/angular/components/search/search.component.html',
})
export class SearchComponent implements OnInit {
    public searchForm: FormGroup;

    constructor(
        @Inject(ContactService)
        private contacts: ContactService,
    ) {
        this.searchForm = new FormGroup({
            search: new FormControl(''),
            sort: new FormControl('name'),
            order: new FormControl('ASC'),
        })
    }

    public ngOnInit(): void {
      this.searchForm.valueChanges
        .pipe(
            debounceTime(400),
            distinctUntilChanged()
        )
        .subscribe(
            res => {
                const {
                    sort,
                    search,
                    order,
                } = res;

                this.contacts.search = search;
                this.contacts.ordering = order;
                this.contacts.sorting = sort;
                this.contacts.doSearch();
            }
        )  
    }
}

angular
  .module("codecraft")
  .directive('search', downgradeComponent({
      component: SearchComponent
  }));
