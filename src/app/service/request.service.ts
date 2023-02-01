import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(public http: HttpClient) { }

  getData (url: string) {
    let header = new HttpHeaders();
    return this.http.get(url, {headers: header});
  }
  getWork (url1: string) {
    let header = new HttpHeaders();
    return this.http.get(url1, {headers: header});
  }
  getWorking (url2: string) {
    let header = new HttpHeaders();
    return this.http.get(url2, {headers: header});
  }
  getAdvantages (url3: string) {
    let header = new HttpHeaders();
    return this.http.get(url3, {headers: header});
  }
  getAbout (url4: string) {
    let header = new HttpHeaders();
    return this.http.get(url4, {headers: header});
  }
  getPrice (url5: string) {
    let header = new HttpHeaders();
    return this.http.get(url5, {headers: header});
  }
  getContact (url6: any) {
    let header = new HttpHeaders();
    return this.http.get(url6, {headers: header});
  }
  getQuestion (url7:any) {
    let header = new HttpHeaders();
    return this.http.get(url7, {headers: header});
  }
}
