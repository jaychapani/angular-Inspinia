import { Routes } from '@angular/router';
import { BaseLayoutComponent } from './components/layout/base-layout.component';
import { DailyTaskComponent } from './components/daily-task/daily-task.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';


export const ROUTES: Routes = [
    // Main redirect
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: 'dashboard', component: BaseLayoutComponent,
        children: [
          {path: 'dailytask', component: DailyTaskComponent, canActivate: [AuthGuard]}
        ]
      },
    // Handle all other routes
    // { path: '**', redirectTo: 'starterview' }
];
