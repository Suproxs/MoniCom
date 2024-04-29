import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormComponent } from '../form/form.component';

const MODULES = [
  RouterLink
]

@Component({
  selector: 'app-Tables',
  imports:[RouterLink,FormComponent],
  standalone: true,
  templateUrl: './Tables.component.html',
  styleUrls: ['./Tables.component.css']
})
export class TablesComponent implements OnInit {

  isFormVisible: boolean = false;

  toggleFormVisibility(): void {
      this.isFormVisible = !this.isFormVisible;
  }

  constructor() { }

  ngOnInit() {
  }

}
