import { Injectable } from '@angular/core';
import { Project} from './project';
import { PROJECTS} from './test-projects';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
    // projectsList: Project[];
    projectsList = PROJECTS;
    currentProject: Project;
  constructor() { }
  // getProject(id: number): Observable<Project> {
  //       return of(PROJECTS.find(project => project.id === id));
  //   }
    getProject(id: number): Project {
              return this.currentProject = PROJECTS.find(project => project.id === id);
          }
}
