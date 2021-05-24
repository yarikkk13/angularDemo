import {Component} from '@angular/core';
import {User} from '../../models/User'
// import {HttpClient} from "@angular/common/http";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-root',
  template: `
    <app-user *ngFor="let u of users" [user]="u"></app-user>`,
  styles: [``]
})
export class AppComponent {
  users: User[] | undefined;

  constructor(private userService: UserService) {
    this.userService.getAllUsers().subscribe(value => this.users = value);
  }
}
