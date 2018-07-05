import { Routes } from '@angular/router';
import { BaseLayoutComponent } from './components/layout/base-layout.component';
import { DailyTaskComponent } from './components/daily-task/daily-task.component';


export const ROUTES: Routes = [
    // Main redirect
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    {
        path: 'dashboard', component: BaseLayoutComponent,
        children: [
          {path: 'dailytask', component: DailyTaskComponent}
        ]
      },
    // Handle all other routes
    // { path: '**', redirectTo: 'starterview' }
];
