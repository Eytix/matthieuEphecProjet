import {Component, inject} from '@angular/core';
import {FormationService} from '../formation/formation.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  formationService = inject(FormationService)

  formationCount = this.formationService.formationCount;
}
