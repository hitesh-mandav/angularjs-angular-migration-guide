import * as angular from 'angular';

import { Component } from "@angular/core";
import { downgradeComponent } from '@angular/upgrade/static';

@Component({
    selector: 'person-create',
    templateUrl: 'app/angular/components/person/person-create/person-create.component.html'
})
export class PersonCreateComponent {}

angular.module("codecraft")
    .directive('personCreate', downgradeComponent({
        component: PersonCreateComponent,
    }))
