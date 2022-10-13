let CardComponent = {
    selector: 'ccCard', // <cc-card>
    templateUrl: 'templates/card.html',
    bindings: {
        user: "="
    },
    controller: class CardController {
        public isDeleting;
        public ContactService;
        public user: any;

        constructor(ContactService: any) {
            this.ContactService = ContactService;
            this.isDeleting = false;
        };

        deleteUser = () => {
            this.isDeleting = true;
            this.ContactService.removeContact(this.user)
                .then( () => {this.isDeleting = false;});
        };

    }
}

angular
  .module("codecraft")
  .component(CardComponent.selector, CardComponent);
