import { Routes } from '@angular/router';
import { BaseLayoutComponent } from './components/layout/base-layout.component';

export const ROUTES: Routes = [
    // Main redirect
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: BaseLayoutComponent },
    // Handle all other routes
    // { path: '**', redirectTo: 'starterview' }
];
