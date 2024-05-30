import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-parcours',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './Parcours.component.html',
  styleUrl: './Parcours.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParcoursComponent { }
