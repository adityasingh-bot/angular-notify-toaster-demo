import { Component } from '@angular/core';
import {NotifyService} from 'notify-toaster';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'notify-toaster-demo';
  constructor(private notification: NotifyService) {}

  pushSuccess() {
    this.notification.show('success', 'This is a success alert');
  }
  pushUpdate() {
    this.notification.show('update', 'This is a update alert');
  }
  pushWarn() {
    this.notification.show('warning', 'This is a warning alert');
  }
  pushInfo() {
    this.notification.show('info', 'This is a info alert');
  }
  pushDelete() {
    this.notification.show('delete', 'This is a delete alert');
  }
}
