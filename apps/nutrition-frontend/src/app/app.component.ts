import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BodyIndicatorComponent } from './shared/components/body-indicator/body-indicator.component';

@Component({
  standalone: true,
  imports: [RouterModule,BodyIndicatorComponent],
  selector: 'nutrition-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(router: Router) {
    router.initialNavigation();
  }
}
