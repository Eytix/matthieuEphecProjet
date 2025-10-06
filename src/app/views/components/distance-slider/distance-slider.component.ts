import {Component, input, model} from '@angular/core';
import {MatSlider, MatSliderThumb} from '@angular/material/slider';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-distance-slider',
  imports: [
    MatSlider,
    MatSliderThumb,
    FormsModule
  ],
  templateUrl: './distance-slider.component.html',
  styleUrl: './distance-slider.component.css'
})
export class DistanceSliderComponent {

  min = input<number>(0);
  max = input<number>(10);
  step = input<number>(1);
  value = model.required<number>();

}
