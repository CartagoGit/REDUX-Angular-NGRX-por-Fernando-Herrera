import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @HostBinding('class.expanded') isExpanded: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  public expandSidebar(): void {
    this.isExpanded = !this.isExpanded;
  }
}
