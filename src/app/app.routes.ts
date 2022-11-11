import {Routes} from "@angular/router";

import {SearchComponent} from "./angular/components/search/search.component";
import {PersonListComponent} from "./angular/components/person/person-list/person-list.component";
import {PersonCreateComponent} from "./angular/components/person/person-create/person-create.component";
import {PersonEditComponent} from "./angular/components/person/person-edit/person-edit.component";

export const routes: Routes = [
  {path: '', redirectTo: '/list(header:search)', pathMatch: 'full'},
  {path: 'list', component: PersonListComponent},
  {path: 'search', component: SearchComponent, outlet: 'header'},
  {path: 'create', component: PersonCreateComponent},
  {path: 'edit/:email', component: PersonEditComponent},
];
