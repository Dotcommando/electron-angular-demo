import { Component } from '@angular/core';
import { IpcRenderer } from 'electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private ipc: IpcRenderer;
  public title = 'Electron Angular Demo';

  constructor() {
    if ((window as any).require) {
      try {
        this.ipc = (window as any).require('electron').ipcRenderer;
      } catch (e) {
        throw e;
      }
    } else {
      console.warn('App is not running inside Electron!');
    }
  }

  openModal(): void {
    console.log('Open a modal');
    this.ipc.send('openModal');
  }
}
