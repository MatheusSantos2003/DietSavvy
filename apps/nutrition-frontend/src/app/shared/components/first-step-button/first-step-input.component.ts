import { Component, Input } from "@angular/core";


@Component({
  selector: "nutrition-app-first-step-input",
  templateUrl: "./first-step-input.component.html",
  styleUrls: ["./first-step-input.component.scss"],
  standalone: true
})
export class FirstStepInputComponent {

  @Input() label = "";
  @Input() icon = "";

}
