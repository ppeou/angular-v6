import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiRoot = '/assets/data/';
  constructor(private http: HttpClient) {

  }

  async getSampleData() {
    return  await this.http.get('/assets/data/sample.json').toPromise();
  }
}
