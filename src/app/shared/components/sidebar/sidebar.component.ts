import { Component, HostBinding, OnInit } from '@angular/core';
import { Project } from '../../interfaces/projects.interface';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @HostBinding('class.expanded') isExpanded: boolean = true;

  public projects: Project[] = [];

  constructor(private _storageService: StorageService) {
    this.projects = this._storageService.projects;
  }

  ngOnInit(): void {}

  public expandSidebar(): void {
    this.isExpanded = !this.isExpanded;
  }
}
