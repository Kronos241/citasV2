import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, NavbarComponent],
  template: `
    <div class="grid grid-nogutter">
      <div class="col-fixed" style="width: 250px">
        <app-sidebar></app-sidebar>
      </div>
      <div class="col">
        <app-navbar></app-navbar>
        <div class="p-4">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `
})
export class AppComponent {}
