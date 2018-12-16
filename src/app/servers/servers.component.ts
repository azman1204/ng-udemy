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

  constructor() { 
    setTimeout(() => this.serverDisabled = true, 5000);
  }

  ngOnInit() {
    
  }

  onCreateServer() {
    this.serverCreationStatus = 'server was created';
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
