import * as angular from 'angular';

import { Component } from "@angular/core";
import { downgradeComponent } from '@angular/upgrade/static';

@Component({
    selector: 'person-edit',
    templateUrl: 'app/angular/components/person/person-edit/person-edit.component.html'
})
export class PersonEditComponent {}

angular.module("codecraft")
    .directive('personEdit', downgradeComponent({
        component: PersonEditComponent,
    }))
