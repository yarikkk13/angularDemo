import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <div>{{name}} - {{phone}}</div>`,
  styles: [``]
})
export class UserComponent {
  @Input()
  name?: string;
  @Input()
  phone ?: string
}
