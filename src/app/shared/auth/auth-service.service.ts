import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from './user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  // public currentUser: Observable<User>;
private login_url = "assets/data/userList";

  constructor(private http: HttpClient) { }
login(user: any){
  return this.http.post<User>(this.login_url,user);
}
}
