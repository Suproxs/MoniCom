import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

const MODULES = [
  RouterLink
]

@Component({
  selector: 'app-sidebar',
  imports:[RouterLink],
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
