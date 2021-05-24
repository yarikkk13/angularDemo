import {Component} from '@angular/core';
import {users} from './data/usersData'

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <h2>{{name}}</h2>
    <app-user *ngFor="let user of userList" [name]="user.name" [phone]="user.phone"></app-user>


  `,
  styles: [`h1 {
    background-color: silver
  }`]
})
export class AppComponent {
  title = 'angularDemo';
  name = 'yaroslav';
  userList = users;
}
