import {
    Component,
    Inject
} from "@angular/core";

import { ContactService } from "./../../../services/contact.service";
import { downgradeComponent } from "@angular/upgrade/static";

@Component({
    selector: 'person-list',
    templateUrl: 'app/angular/components/person/person-list/person-list.component.html'
})
export class PersonListComponent {
    constructor(
        @Inject(ContactService)
        public readonly contacts: ContactService
    ){}
}
