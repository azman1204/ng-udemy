import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  serverDisabled = false;
  serverCreationStatus = 'Server not created';
  serverName = 'Test Server';
  serverCreated = false;
  servers = ['server 1', 'server 2'];

  constructor() {
    setTimeout(() => this.serverDisabled = true, 5000);
  }

  ngOnInit() {

  }

  onCreateServer() {
    this.serverCreationStatus = 'server was created';
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
