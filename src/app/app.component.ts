import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    NavbarComponent,
    CommonModule,
  ],
  template: `
    <ng-container *ngIf="!esLogin">
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
    </ng-container>
    <ng-container *ngIf="esLogin">
      <router-outlet></router-outlet>
    </ng-container>
  `,
})
export class AppComponent {
  constructor(private router: Router) {}

  get esLogin(): boolean {
    return this.router.url === '/login';
  }
}
