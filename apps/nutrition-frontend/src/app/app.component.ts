import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BodyIndicatorComponent } from './shared/components/body-indicator/body-indicator.component';

@Component({
  standalone: true,
  imports: [RouterModule,BodyIndicatorComponent],
  selector: 'nutrition-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  title = 'nutrition-frontend';
  doneProgress = 50
  notDoneProgress = 50

  isLoading = true;

  colorBatch01="";
  colorBatch02="";
  colorBatch03="";

  ngOnInit(): void {

    this.getColorGradingSVG();

  }


  getColorGradingSVG() {

    console.log("colorGradingSVG")


  }
}
