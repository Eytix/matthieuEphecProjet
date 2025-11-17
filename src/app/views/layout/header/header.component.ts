import {Component, inject, signal} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIconButton} from '@angular/material/button';
import {LayoutService} from '../layout.service';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [
    MatToolbar,
    MatIcon,
    MatIconButton,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  layoutSerice = inject(LayoutService);

  title = signal("Centre de formations");

}
