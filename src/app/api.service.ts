import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getRandomPhoto(){
    return this.httpClient.get(`https://jrose.us/api/rand_photo.php`);
  }
}
