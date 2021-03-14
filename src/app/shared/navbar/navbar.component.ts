import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent implements OnInit {

  constructor(private _route: Router) {

  }

  ngOnInit(): void {}

  irUsuario(id: string) {
    if (!id) {
      return;
    }

    this._route.navigate([`/usuario`, id])
  }
}
