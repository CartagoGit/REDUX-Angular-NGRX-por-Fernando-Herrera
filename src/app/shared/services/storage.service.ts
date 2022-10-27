import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Project } from '../interfaces/projects.interface';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _projects!: Project[];
  set projects(value: Project[]) {
    this._projects = [...value];
    this._subjectProjects$.next([...this.projects]);
  }
  get projects(): Project[] {
    return [...this._projects];
  }

  //? Creamos un observable para recibir cada vez que los projectos cambien
  private _subjectProjects$: Subject<Project[]> = new Subject<Project[]>();

  public obsProjects: Observable<Project[]>;

  //? Proyectos iniciales
  private _elementsProjects: Project[] = [
    {
      title: 'Redux',
      description: 'desde abosulto cero',
    },
    {
      title: 'NGRX',
      description: 'Redux con Angular',
    },
    {
      title: 'To-Do App',
      description: 'Aplicación con un estado más complejo',
    },
    {
      title: 'Ingresos y reintegros App',
      description: 'Éstilo y funcionalidades básicas',
    },
    {
      title: 'Autenticación de aplicación',
      description: 'Login y registro',
    },
    {
      title: 'Redux en nuestra App',
      description: 'Fin de la autenticación',
    },
    {
      title: 'Módulo',
      description: 'Ingresos y reintegros',
    },

    {
      title: 'NGRX',
      description: 'Con LazyLoad',
    },
    {
      title: 'Despliegue en Firebase',
      description: 'Sección bonus',
    },
    {
      title: 'Effects App',
      description: 'Ngrx/effects',
    },
    {
      title: 'Más efectos',
      description: 'Ngrx/effects',
    },
  ];

  constructor() {
    this.projects = this._elementsProjects;
    this.obsProjects = this._subjectProjects$.asObservable();
  }
}
