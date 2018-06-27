import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    // Main redirect
    { path: '', redirectTo: 'starterview', pathMatch: 'full' },

    // Handle all other routes
    { path: '**', redirectTo: 'starterview' }
];
