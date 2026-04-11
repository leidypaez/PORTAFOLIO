import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'lgp-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(public router: Router) {}
}
