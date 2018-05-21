import { Component, OnInit } from '@angular/core';
import { PROJECTS } from '../test-projects';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  projects = PROJECTS;
  constructor() { }

  ngOnInit() {
  }

}
