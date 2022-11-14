import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ipost } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  API_URL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Ipost[]> {

    return this.http.get<Ipost[]>(this.API_URL);
  }
}
