import { Component } from '@angular/core';
import { UserInfo } from './userInfo/user-info/user-info';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [UserInfo],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  username: string = 'Suchit_kumar';
  currentCount: number = NaN;

  updatedCount(event: number) {
    this.currentCount = event
  }
}
