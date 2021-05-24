import {Component} from '@angular/core';
import {User} from '../../models/User'
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  template: `<app-user *ngFor="let u of users" [user]="u" ></app-user>`,
  styles: [``]
})
export class AppComponent {
  users : User[] | undefined

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(value => this.users=value )
  }
}
