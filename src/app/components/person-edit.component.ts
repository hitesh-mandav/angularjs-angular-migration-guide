import * as angular from 'angular';

export let PersonEditComponent = {
    selector: 'personEdit', // <person-edit>
    templateUrl: 'templates/edit.html',
    bindings: {},
    controller: class PersonEditController {
        public $stateParams: any;
        public $state: any;
        public contacts: any;
        public person: any;

        constructor(
            $state: any,
            $stateParams: any,
            ContactService: any
        ) {
            this.$state = $state;
            this.$stateParams = $stateParams;
            this.contacts = ContactService;
            this.person = this.contacts.getPerson(this.$stateParams.email);
        }

        save() {
            this.contacts.updateContact(this.person).then(() => {
              this.$state.go("list");
            });
          };
      
        remove() {
            this.contacts.removeContact(this.person).then(() => {
              this.$state.go("list");
            });
          };
    },
}

angular
  .module("codecraft")
  .component(PersonEditComponent.selector, PersonEditComponent)
