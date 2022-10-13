import * as angular from 'angular';

export let SpinnerComponent = {
    selector: "ccSpinner", // <cc-spinner>
    templateUrl: "templates/spinner.html",
    bindings: {
        isLoading: "=",
        message: "@"
    },
    controller: class SpinnerController {},
}

angular
  .module("codecraft")
  .component(SpinnerComponent.selector, SpinnerComponent);
