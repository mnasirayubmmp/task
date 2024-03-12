import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  fetchUserPosts(): Observable<any> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').pipe(
      switchMap(users => {
        const firstUserId = users[0].id;
        return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/posts?userId=${firstUserId}`);
      })
    );
  }

}
