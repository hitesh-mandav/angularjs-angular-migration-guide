import * as angular from 'angular';

import { Component, Inject, Input } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';

import { ContactService } from '../../services/contact.service';
import { UIRouterState } from '../../../ajs-upgraded-providers';

@Component({
    selector: 'cc-card',
    templateUrl: 'app/angular/components/card/card.component.html',
})
export class CardComponent {
    public isDeleting;
    @Input() public user: any;

    constructor(
        @Inject(ContactService)
        private contactService: ContactService,
        @Inject(UIRouterState)
        private $state: any,
    ) {
        this.isDeleting = false;
    };

    deleteUser = () => {
        this.isDeleting = true;
        this.contactService.removeContact(this.user)
            .then(() => {this.isDeleting = false;});
    };

    public editUser(): void {
        this.$state.go('edit' ,{email: this.user.email} );
    };
}

angular
  .module("codecraft")
  .directive('ccCard', downgradeComponent({
      component: CardComponent,
      inputs: ['user'],
  }));
