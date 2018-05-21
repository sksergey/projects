import { Component, OnInit } from '@angular/core';
import { PROJECTS } from '../test-projects';
import { ProjectsService} from '../projects.service';
import {Project} from '../project';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  // projects = PROJECTS;
    projectsService = new ProjectsService();
  constructor() { }

  ngOnInit() {
  }
  onSelect(project: Project): void {
        this.projectsService.currentProject = project;
    }
}
