import * as angular from 'angular';

import { Inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { downgradeInjectable } from '@angular/upgrade/static';

import { lastValueFrom } from 'rxjs';

export class Contact {
  private baseURL: string = 'http://localhost:3000/contacts';

  constructor(
    @Inject(HttpClient)
    private http: HttpClient
  ) {};

  query(params: {string: string}){
    return lastValueFrom(this.http.get(this.baseURL, {params}));
  }

  get(id: any, params: {string: string}){
    return lastValueFrom(this.http.get(`${this.baseURL}/${id}`, {params}));
  }

  update(data: any){
    return lastValueFrom(this.http.put(`${this.baseURL}/${data.id}`, data));
  }

  save(data: any, params: {string: string}){
    return lastValueFrom(this.http.post(`${this.baseURL}`, data));
  }

  remove(data: any){
    console.log(data);
    return lastValueFrom(this.http.delete(`${this.baseURL}/${data.id}`));
  }
}

angular
  .module("codecraft")
  .factory("Contact", downgradeInjectable(Contact));
