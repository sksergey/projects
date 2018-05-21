import { Injectable } from '@angular/core';
import { Project} from './project';
import { PROJECTS} from './test-projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
    projectsList: Project[];
    currentProject: Project;
  constructor() { }
}
