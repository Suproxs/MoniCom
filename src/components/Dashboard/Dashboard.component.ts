import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

const MODULES = [
  RouterLink
]

@Component({
  selector: 'app-Dashboard',
  imports:[RouterLink],
  standalone: true,
  templateUrl: './Dashboard.component.html',
  styleUrls: ['./Dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
