import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  // public isExpanded: boolean = false;
  @HostBinding('class.expanded') isExpanded: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public expandSidebar(): void {
    this.isExpanded = !this.isExpanded;
  }
}
