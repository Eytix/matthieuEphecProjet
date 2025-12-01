import { Component, inject } from '@angular/core';
import { FormationService } from '../../formation/formation.service';
import { FormationCardComponent } from '../../formation/formation-card/formation-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-formation-list',
  standalone: true,
  imports: [FormationCardComponent, NgFor],
  template: `
    <app-formation-card
      *ngFor="let f of formations()"
      [formation]="f">
    </app-formation-card>
  `
})
export class FormationListComponent {
  formationService = inject(FormationService);
  formations = this.formationService.getCatalog; // Signal<Formation[]>
}
