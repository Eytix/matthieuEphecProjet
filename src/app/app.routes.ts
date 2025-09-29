import {Routes} from '@angular/router';
import {FormationCatalogComponent} from './views/formation/formation-catalog/formation-catalog.component';
import {FormationCreationComponent} from './views/formation/formation-creation/formation-creation.component';
import {FormationDetailComponent} from './views/formation/formation-detail/formation-detail.component';

export const routes: Routes = [
  {path: 'catalog', component: FormationCatalogComponent},
  {path: 'create', component: FormationCreationComponent},
  {path: 'formation/:id', component: FormationDetailComponent},
];
