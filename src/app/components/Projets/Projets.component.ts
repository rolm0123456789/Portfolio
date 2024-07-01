import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-projets',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './Projets.component.html',
    styleUrl: './Projets.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjetsComponent {
    public imageUrl: string = 'src/assets/angularProjet.png';
}
