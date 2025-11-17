import {computed, inject, Injectable, Signal} from '@angular/core';
import {Formation} from '../../model/Formation';
import {UUID} from '../../shared/uuid';
import {catchError, map, Observable, startWith, Subject, switchMap} from 'rxjs';
import {toSignal} from '@angular/core/rxjs-interop';
import {FormationControllerService, FormationDto} from '../../api';
import {formatDate} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  controller = inject(FormationControllerService)

  private readonly refreshTrigger$ = new Subject<void>();
  private readonly findFormations: Observable<Formation[]> = this.refreshTrigger$.pipe(
    startWith([]),
    switchMap(() => this.controller.formations()),
    map(data => {
      return data.map(this.mapFormation);
    }),
    catchError(err => {
      console.error('Error fetching formations', err);
      return [];
    }));

  private readonly mapFormation = (f: FormationDto) => {
    return {
      ...f,
      date: new Date(f.date!),
      distance: Math.floor(Math.random() * 100),
    } as Formation
  }

  private readonly catalog: Signal<Formation[]> = toSignal(this.findFormations, {initialValue: []});

  getCatalog = this.catalog;

  formationCount = computed(() => {
    return this.catalog().length;
  });

  getFormation(formationId: UUID): Signal<Formation> {
    return toSignal(
      this.controller.formation(formationId).pipe(
        map(this.mapFormation),
        catchError(err => {
          console.error('Error fetching formation', err);
          throw err;
        })
      ),
      {initialValue: {} as Formation}
    );
  }

  addFormation(formation: Formation) {
    const dto: FormationDto = {
      ...formation,
      date: formatDate(formation.date, "yyyy-MM-dd", "fr-BE"),
      tags: formation.tags
    }
    this.controller.addFormation(dto).subscribe(() => {
      console.log('Formation added ; will refresh');
      this.refreshTrigger$.next();
    })
  }

  removeFormation(formation: Formation) {
    this.controller.deleteFormation(formation.id).subscribe(() => {
      console.log('Formation removed ; will refresh');
      this.refreshTrigger$.next();
    })
  }
}
