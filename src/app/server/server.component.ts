import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
    `
  ]
})

export class ServerComponent {
  serverID: number = 0;
  status = 'online';

  constructor() {
    let id = Math.random();
    this.serverID = Math.round(id * 10);
    this.status = id > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.status;
  }

  getColor() {
    return this.status === 'online' ? 'green' : 'red';
  }
}
