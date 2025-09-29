import {Component, inject} from '@angular/core';
import {FormationCardComponent} from '../formation-card/formation-card.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormationService} from '../formation.service';

@Component({
  selector: 'app-formation-catalog',
  imports: [
    FormationCardComponent,
    ReactiveFormsModule
  ],
  templateUrl: './formation-catalog.component.html',
  styleUrl: './formation-catalog.component.css'
})
export class FormationCatalogComponent {

  formationService = inject(FormationService);
  catalog = this.formationService.getCatalog();

}
