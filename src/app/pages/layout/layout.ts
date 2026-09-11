import { UpperCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet, UpperCasePipe],
  selector: 'app-layout',
  styleUrl: './layout.css',
  templateUrl: './layout.html',
})
export class Layout {

  loggedInUser: string = '';
  router = inject(Router);

  constructor() {
    const localData = localStorage.getItem("carUser");
    if(localData != null) {
      this.loggedInUser = localData;
    }
  }

  logout() {
    localStorage.removeItem("carUser");
    this.router.navigate(["/"]);
  }
}
