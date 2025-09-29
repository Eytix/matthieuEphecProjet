import {Component, inject, input} from '@angular/core';
import {DatePipe} from "@angular/common";
import {
  MatCard,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {Formation} from '../../../model/Formation';
import {MatButton} from '@angular/material/button';
import {FormationService} from '../formation.service';
import {RouterLink} from '@angular/router';
import {FormationTagsComponent} from '../formation-tags/formation-tags.component';

@Component({
  selector: 'app-formation-card',
  imports: [
    DatePipe,
    MatCard,
    MatCardContent,
    MatCardFooter,
    MatCardHeader,
    MatCardTitle,
    MatButton,
    MatCardSubtitle,
    RouterLink,
    FormationTagsComponent
  ],
  templateUrl: './formation-card.component.html',
  styleUrl: './formation-card.component.css'
})
export class FormationCardComponent {

  formationService = inject(FormationService);
  formation = input.required<Formation>();

  isDatePast(formation: Formation) {
    return new Date().getTime() > formation.date.getTime();
  }


  deleteFormation() {
    this.formationService.removeFormation(this.formation());
  }
}
