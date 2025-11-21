import {Component, inject} from '@angular/core';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {MatToolbar} from '@angular/material/toolbar';
import {MatNavList} from '@angular/material/list';
import {FooterComponent} from './views/layout/footer/footer.component';
import {HeaderComponent} from './views/layout/header/header.component';
import {ContentComponent} from './views/layout/content/content.component';
import {MenuComponent} from './views/layout/menu/menu.component';
import {LayoutService} from './views/layout/layout.service';

@Component({
  selector: 'app-root',
  imports: [MatSidenavContainer,
    MatSidenav,
    MatToolbar,
    MatNavList,
    MatSidenavContent,
    FooterComponent, HeaderComponent, ContentComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  layoutSerice = inject(LayoutService);
}
