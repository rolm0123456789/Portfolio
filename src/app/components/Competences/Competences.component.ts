import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-competences',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './Competences.component.html',
  styleUrl: './Competences.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompetencesComponent { }
