import {
    Component,
    EventEmitter,
    Inject,
    Input,
    OnInit,
    Output,
} from "@angular/core";

import { ContactService } from "./../../../services/contact.service";
import {
    UIRouterState,
    UIRouterStateParams,
} from "./../../../../ajs-upgraded-providers";

@Component({
    selector: 'person-form',
    templateUrl: 'app/angular/components/person/person-form/person-form.component.html',
})
export class PersonFormComponent implements OnInit {
    @Input()
    public editing: boolean = false;

    public person: any = {};

    constructor(
        @Inject(ContactService)
        public contacts: ContactService,
        @Inject(UIRouterState)
        private $state: any,
        @Inject(UIRouterStateParams)
        private $stateParams: any,
    ) {}

    public ngOnInit(): void {
        if (this.editing) {
            this.person = this.contacts.getPerson(this.$stateParams.email);
        }
    }

    public save(): void {
        if(this.editing){
            this.contacts.updateContact(this.person).then(() => {
                this.$state.go("list");
              });
        } else {
            this.contacts.createContact(this.person)
                .then(() =>  {this.$state.go("list");})
        }
    }

    public remove(): void {
        this.contacts.removeContact(this.person).then(() => {
          this.$state.go("list");
        });
    }
}
