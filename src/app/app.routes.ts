import { Routes } from '@angular/router';
import { BaseLayoutComponent } from './components/layout/base-layout.component';
import { DailyTaskComponent } from './components/daily-task/daily-task.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';


export const ROUTES: Routes = [
    // Main redirect
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: 'dashboard', component: BaseLayoutComponent, canActivate: [AuthGuard],
        children: [
            { path: 'dailytask', component: DailyTaskComponent }
        ]
    },
    // Handle all other routes
    // { path: '**', redirectTo: 'starterview' }
];
