import {Component, computed, inject, signal} from '@angular/core';
import {FormationCardComponent} from '../formation-card/formation-card.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormationService} from '../formation.service';
import {MatError, MatFormField, MatHint, MatSuffix} from '@angular/material/form-field';
import {MatInput, MatLabel} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {DistanceSliderComponent} from '../../components/distance-slider/distance-slider.component';
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from '@angular/material/datepicker';

@Component({
  selector: 'app-formation-catalog',
  imports: [
    FormationCardComponent,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatInput,
    FormsModule,
    MatButton,
    DistanceSliderComponent,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatHint,
    MatSuffix
  ],
  templateUrl: './formation-catalog.component.html',
  styleUrl: './formation-catalog.component.css'
})
export class FormationCatalogComponent {


  formationService = inject(FormationService);

  textFilter = signal('');
  distanceFilter = signal(50);
  datefilter = signal(new Date());
  tagFilter = signal('');
  lowPriceFilter= signal(0);
  highPriceFilter= signal(20);

  catalog = computed(() => {
    return this.formationService.getCatalog().filter(formation => {

      const tagOk = this.tagFilter() === '' || formation.tags?.some(t => t.toLowerCase().includes(this.tagFilter().toLowerCase()));

      return formation.title.toLowerCase().includes(this.textFilter().toLowerCase())
        && formation.distance <= this.distanceFilter()
        && formation.date >= this.datefilter()
        && tagOk
        && this.lowPriceFilter() <= formation.prix
        && this.highPriceFilter() >= formation.prix;
    });
  });

  resetFilter() {
    this.textFilter.set('');
    this.distanceFilter.set(50);
    this.datefilter.set(new Date());
    this.tagFilter.set('');
    this.lowPriceFilter.set(0);
    this.highPriceFilter.set(20);
    // hello
  }

}
