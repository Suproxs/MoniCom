import { Routes } from '@angular/router';
import { TablesComponent } from '../components/Tables/Tables.component';
import { DashboardComponent } from '../components/Dashboard/Dashboard.component';
import { LoginComponent } from '../components/login/login.component';

export const routes: Routes = [
  {path:'' , redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'tables', component:TablesComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'login', component:LoginComponent}

];
