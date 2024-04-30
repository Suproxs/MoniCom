// routes.app.ts
import { Routes } from '@angular/router';
import { TablesComponent } from '../components/Tables/Tables.component';
import { DashboardComponent } from '../components/Dashboard/Dashboard.component';
import { LoginComponent } from '../components/login/login.component';
import { AuthGuard } from 'src/auth/auth.guard';

export const routes: Routes = [
 {path:'' , redirectTo: 'login', pathMatch: 'full'},
 {path: 'tables', component:TablesComponent, canActivate: [AuthGuard]},
 {path: 'dashboard', component:DashboardComponent, canActivate: [AuthGuard]},
 {path: 'login', component:LoginComponent}
];
