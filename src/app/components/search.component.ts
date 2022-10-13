import * as angular from 'angular';

export let SearchComponent = {
    selector: 'search',
    templateUrl: 'templates/searchform.html',
    bindings: {},
    controller: class SearchController {
        public contacts: any;

        constructor(ContactService: any) {
            this.contacts = ContactService;
        }

        loadMore() {
            this.contacts.loadMore();
        }
    }
}

angular
  .module("codecraft")
  .component(SearchComponent.selector, SearchComponent);
