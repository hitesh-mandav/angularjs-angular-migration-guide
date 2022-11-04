import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Contact {
  private baseURL: string = 'http://localhost:3000/contacts';

  constructor(
    @Inject(HttpClient)
    private http: HttpClient
  ) {};

  query(params: {[key: string]: string}){
    return this.http.get(this.baseURL, {params});
  }

  get(id: any, params: {[key: string]: string}){
    return this.http.get(`${this.baseURL}/${id}`, {params});
  }

  update(data: any){
    return this.http.put(`${this.baseURL}/${data.id}`, data);
  }

  save(data: any){
    return this.http.post(`${this.baseURL}`, data);
  }

  remove(data: any){
    console.log(data);
    return this.http.delete(`${this.baseURL}/${data.id}`);
  }
}
