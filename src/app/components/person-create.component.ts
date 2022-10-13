import * as angular from 'angular';

export let PersonCreateComponent = {
    selector: 'personCreate', // <person-create>
    templateUrl: 'templates/create.html',
    bindings: {},
    controller: class PersonCreateController {
        public contacts: any;
        public person: any = {};
        public $state: any;

        constructor($state: any, ContactService: any) {
            this.contacts = ContactService;
            this.$state = $state;
        }

        save() {
            console.log("createContact");
            this.contacts.createContact(this.person)
                .then(() =>  {this.$state.go("list");})
        }
    }
}

angular
  .module("codecraft")
  .component(PersonCreateComponent.selector, PersonCreateComponent);
