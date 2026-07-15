import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(
    private http: HttpClient
  ) { }

  getPlaysholderUserData() {
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      tap((userList:any)=>{
        console.log("get orginal data if use TAP operator=>",userList)
      }),
      map((userList: any) => userList.map((user: any) => { // befor returning whole data map data here using rxjs map operator
        return { id: user.id, name: user.name }
      }))
    )
  }
}
