import { Routes } from '@angular/router';
import { AccueilComponent } from './components/Accueil/Accueil.component';

export const routes: Routes = [
    { path: '', redirectTo: 'Accueil', pathMatch: 'full' },
    { path: 'Accueil', component: AccueilComponent },
];
