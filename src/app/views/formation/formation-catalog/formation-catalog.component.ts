import {Component} from '@angular/core';
import {Formation} from '../../../model/Formation';
import {FormationCardComponent} from '../formation-card/formation-card.component';
import {uuid} from '../../../shared/uuid';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatError, MatFormField, MatHint, MatLabel, MatSuffix} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from '@angular/material/datepicker';

@Component({
  selector: 'app-formation-catalog',
  imports: [
    FormationCardComponent,
    MatFormField,
    ReactiveFormsModule,
    MatLabel,
    MatInput,
    MatButton,
    MatError,
    MatDatepicker,
    MatDatepickerToggle,
    MatHint,
    MatDatepickerInput,
    MatSuffix
  ],
  templateUrl: './formation-catalog.component.html',
  styleUrl: './formation-catalog.component.css'
})
export class FormationCatalogComponent {

  catalog: Formation[] = [
    {
      id: uuid(),
      title: 'Angular - premiers pas',
      description: 'Fais tes premiers pas avec Angular',
      location: 'EPHEC',
      date: new Date("2025-09-20T10:30:00"),
      tags: ['Angular', 'TypeScript']
    },
    {
      id: uuid(),
      title: 'Java - Springboot',
      description: 'Découvrez Springboot',
      location: 'Remote',
      date: new Date("2025-09-30T10:30:00"),
      tags: ['Java', 'Springboot']
    }
  ];

  form = new FormGroup({
    title: new FormControl<string>('', [Validators.required, Validators.maxLength(100)]),
    location : new FormControl<string>('', [Validators.required]),
    date : new FormControl<Date>(new Date(), [Validators.required]),
    description : new FormControl<string>(''),
    tags : new FormControl<string>('')
  })

  isTitleTooLong() {
    return this.form.get('title')?.hasError('maxlength');
  }

  addFormation() {
    const formation: Formation = {
      id: uuid(),
      title: this.form.get('title')?.value!,
      location: this.form.get('location')?.value!,
      date: this.form.get('date')?.value!,
      description: this.form.get('description')?.value || '',
      tags: this.form.get('tags')?.value ? this.extractTags() : []
    }

    this.catalog.push(formation);
    this.form.reset();
  }

  private extractTags() {
    let tagsAsString = this.form.get('tags')?.value!;
    return tagsAsString.split(',').map(t => t.trim());
  }
}
