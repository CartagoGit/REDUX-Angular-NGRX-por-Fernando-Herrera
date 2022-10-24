import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public title: string = 'Redux en Angular - NGRX - Por Fernando Herrera';

  constructor(private _router: Router) {}

  ngOnInit(): void {}

  public logoClicked(): void {
    this._router.navigate(['/']);
  }
}
