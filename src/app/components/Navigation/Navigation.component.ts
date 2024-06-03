import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-navigation',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './Navigation.component.html',
    styleUrl: './Navigation.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {}
