import {Component, computed, inject, model, signal} from '@angular/core';
import {FormationService} from '../formation/formation.service';
import {FormsModule} from '@angular/forms';
import {Formation} from '../../model/Formation';
import {CommonModule} from '@angular/common';
import {FormationTagsComponent} from '../formation/formation-tags/formation-tags.component';
import {
  MatCard,
  MatCardHeader,
  MatCardTitle
} from '@angular/material/card';
import {RouterLink} from '@angular/router';
import {MatListItem} from '@angular/material/list';
@Component({
  selector: 'app-home',
  imports: [
    FormsModule,
    CommonModule,
    FormationTagsComponent,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    RouterLink,
    MatListItem,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  formationService = inject(FormationService)
  formation = model.required<Formation>();
  formationCount = this.formationService.formationCount;

  trackByFormation(index: number, formation: Formation) {
    return formation.id;
  }

  datefilter= signal(new Date());

  catalog = computed(() => {
    return this.formationService.getCatalog().filter(formation => {
      const formationDate = new Date(formation.date);
      return formationDate >= this.datefilter()
    });
  });
}
