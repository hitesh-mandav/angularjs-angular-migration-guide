import {
    Component,
    Inject,
    Input,
    OnInit,
} from "@angular/core";

import { ContactService } from "./../../../services/contact.service";
import { ActivatedRoute, Router } from "@angular/router";

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
        @Inject(ActivatedRoute)
        private route: ActivatedRoute,
        @Inject(Router)
        private router: Router,
    ) {}

    public ngOnInit(): void {
        if (this.editing) {
            this.route.params.subscribe(params => {
                console.log(params);
                if (params['email']) {
                  this.person = this.contacts.getPerson(params['email']);
                }
              }); 
        }
    }

    public save(): void {
        if(this.editing){
            this.contacts.updateContact(this.person).then(() => {
                this.router.navigate(['']);
              });
        } else {
            this.contacts.createContact(this.person)
                .then(() =>  {this.router.navigate(['']);})
        }
    }

    public remove(): void {
        this.contacts.removeContact(this.person).then(() => {
            this.router.navigate(['']);
        });
    }
}
