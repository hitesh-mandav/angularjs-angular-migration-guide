import { Component, Inject, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ContactService } from '../../services/contact.service';

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
    ) {
        this.isDeleting = false;
    };

    deleteUser = () => {
        this.isDeleting = true;
        this.contactService.removeContact(this.user)
            .then(() => {this.isDeleting = false;});
    };
}
