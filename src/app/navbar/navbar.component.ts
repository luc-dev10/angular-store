import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isToggled: boolean = false;

  // check if toggled
  toggleOnClick() {
    this.isToggled = !this.isToggled;
  }

  constructor() {}

  ngOnInit(): void {}
}
