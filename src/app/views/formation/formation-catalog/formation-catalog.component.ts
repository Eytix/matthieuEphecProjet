import {Component, computed, inject, OnInit, signal} from '@angular/core';
import {FormationCardComponent} from '../formation-card/formation-card.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormationService} from '../formation.service';
import {MatFormField, MatHint, MatSuffix} from '@angular/material/form-field';
import {MatInput, MatLabel} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {DistanceSliderComponent} from '../../components/distance-slider/distance-slider.component';
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from '@angular/material/datepicker';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { Router } from '@angular/router';


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
    MatSuffix,
  ],
  templateUrl: './formation-catalog.component.html',
  styleUrl: './formation-catalog.component.css'
})
export class FormationCatalogComponent implements OnInit {

  formationService = inject(FormationService);

  constructor(
    private routeur: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['text']) this.textFilter.set(params['text']);
      if (params['distance']) this.distanceFilter.set(+params['distance']);
      if (params['datefilter']) this.datefilter.set(this.parseDate(params['datefilter']));
      if (params['tag']) this.tagFilter.set(params['tag']);
      if (params['minPrice']) this.lowPriceFilter.set(+params['minPrice']);
      if (params['maxPrice']) this.highPriceFilter.set(+params['maxPrice']);

      if (!params['text'] && !params['distance'] && !params['datefilter'] &&
        !params['tag'] && !params['minPrice'] && !params['maxPrice']) {
        this.resetFilter();
      }
    });
  }
  private parseDate(value: string): Date {
    const day = Number(value.slice(0, 2));
    const month = Number(value.slice(2, 4)) - 1;
    const year = Number(value.slice(4, 8));

    return new Date(year, month, day);
  }


  updateQueryParams(params: Record<string, any>): void {
    this.routeur.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: params,
        queryParamsHandling: 'merge'
      }
    );

  }

  onDateChange(date: Date | null): void {
    if (!date) return;

    const formatted = this.formatDate(date);
    this.datefilter.set(date);

    this.updateQueryParams({ datefilter: formatted });

  }
  private formatDate(date: Date): string {
    const d = String(date.getDate()).padStart(2, '0');
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const y = date.getFullYear();
    return `${d}${m}${y}`;
  }

  onTextFilterChange(value: string): void {
    this.textFilter.set(value);
    this.updateQueryParams({
      text: value || null
    });
  }
  onDistanceChange(value: number): void {
    this.distanceFilter.set(value);
    this.updateQueryParams({ distance: value });
  }

  onTagChange(value: string): void {
    this.tagFilter.set(value);
    this.updateQueryParams({ tag: value || null });
  }

  onPriceChange(): void {
    this.updateQueryParams({
      minPrice: this.lowPriceFilter(),
      maxPrice: this.highPriceFilter()
    });
  }


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
    this.updateQueryParams({
      text: null,
      distance: null,
      datefilter: null,
      tag: null,
      minPrice: null,
      maxPrice: null
    });
  }

}
