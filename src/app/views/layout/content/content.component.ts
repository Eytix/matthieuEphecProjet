import {Component} from '@angular/core';
import {FormationCatalogComponent} from '../../formation/formation-catalog/formation-catalog.component';
import {FormationCreationComponent} from '../../formation/formation-creation/formation-creation.component';

@Component({
  selector: 'app-content',
  imports: [
    FormationCatalogComponent,
    FormationCreationComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
