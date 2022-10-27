import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Project } from '../../interfaces/projects.interface';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-list-badged',
  templateUrl: './list-badged.component.html',
  styleUrls: ['./list-badged.component.scss'],
})
export class ListBadgedComponent implements OnInit {
  public projects: Project[] = [];
  private _subcriptionProjects!: Subscription;

  constructor(private _storage: StorageService) {
    this.projects = this._storage.projects;
    this._initSubscriptionProject();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this._subcriptionProjects.unsubscribe();
  }

  private _initSubscriptionProject(): void {
    this._subcriptionProjects = this._storage.obsProjects.subscribe({
      next: (projects: Project[]) => {
        this.projects = [...projects];
      },
      error: (error) =>
        console.log('Hubo un error al recuperar los datos de proyectos', error),
    });
  }
}
