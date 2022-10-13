import * as angular from 'angular';

export let PersonListComponent = {
    selector: 'personList', // <person-list>
    templateUrl: 'templates/list.html',
    bindings: {},
    controller: class PersonListController {
        public contacts: any;

        constructor(ContactService: any) {
            this.contacts = ContactService;
        }
    },
}

angular
  .module("codecraft")
  .component(PersonListComponent.selector, PersonListComponent);
