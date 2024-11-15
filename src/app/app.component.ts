import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { TitleComponent } from './shared/components/title/title.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { LeftsideComponent } from './shared/components/leftside/leftside.component';
import { SharedVariable } from './shared.service';
import { FooterComponent } from './shared/components/footer/footer.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, RouterModule,
    NavbarComponent, LeftsideComponent,FooterComponent,TitleComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  title = 'RCD-Areanet';
  header: string = 'Rho-Max';

  constructor(public sharedSettings: SharedVariable) {}

  BackButton() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
}