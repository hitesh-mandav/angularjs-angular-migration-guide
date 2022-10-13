import * as angular from 'angular';

export class Contact {
  private baseURL: string = 'http://localhost:3000/contacts';
  private $http: any;

  constructor($http: any) {
    this.$http = $http;  
  };

  query(params: {string: string}){
    return this.$http.get(this.baseURL, {params});
  }

  get(id: any, params: {string: string}){
    return this.$http.get(`${this.baseURL}/${id}`, {params});
  }

  update(data: any){
    return this.$http.put(`${this.baseURL}/${data.id}`, data);
  }

  save(data: any, params: {string: string}){
    return this.$http.post(`${this.baseURL}`, data);
  }

  remove(data: any){
    console.log(data);
    return this.$http.delete(`${this.baseURL}/${data.id}`);
  }
}

angular
  .module("codecraft")
  .service("Contact", Contact);
