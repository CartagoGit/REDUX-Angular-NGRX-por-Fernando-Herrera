import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public title: string = 'Redux en Angular - NGRX - Por Fernando Herrera'
  constructor() { }

  ngOnInit(): void {
  }

}
